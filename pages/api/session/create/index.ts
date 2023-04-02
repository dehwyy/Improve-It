import { NextApiRequest, NextApiResponse } from 'next'
import prisma from '@/prisma/client'
import { Difficulties, Modes, PlayerModes } from '@/types/export'

type Answer = { userId: string | 'bot' | null; timeMs: number }

interface IBody {
  difficulty: Difficulties
  mode: Modes
  count: number
  playerMode: PlayerModes
  players: { id: string | 'bot' }[]
  answers: Answer[]
}

function getPrismaModeByEnum(mode: Modes) {
  switch (mode) {
    case Modes.PlusMinus:
      return 'PlusMinus'
    default:
      return mode
  }
}

function getPrismaGameTypeByEnum(playerMode: PlayerModes) {
  switch (playerMode) {
    case PlayerModes.WithBot:
      return 'WithBot'
    default:
      return playerMode
  }
}

function getWinnerFromSession(answers: { userId: string | 'bot' | null; timeMs: number }[]) {
  let maxValue = 0
  let maxUserId = ''
  const UsersAnswers = {} as Record<string | 'bot', number>
  for (let ans of answers) {
    if (!ans.userId) continue
    if (UsersAnswers[ans.userId]) {
      UsersAnswers[ans.userId] += 1
    } else {
      UsersAnswers[ans.userId] = 1
    }
    if (UsersAnswers[ans.userId] > maxValue) {
      maxValue = UsersAnswers[ans.userId]
      maxUserId = ans.userId
    }
  }
  return maxUserId == 'bot' ? null : maxUserId
}

function getWinner({ answers }: { answers: Answer[] }) {
  const sessionWinner = getWinnerFromSession(answers)
  return !sessionWinner
    ? {
        sessionWinnerId: undefined,
      }
    : {
        sessionWinner: {
          connect: {
            id: sessionWinner as string,
          },
        },
      }
}

export default async function handle(req: NextApiRequest, res: NextApiResponse<unknown>) {
  if (req.method === 'POST') {
    try {
      const { difficulty, mode, count, answers, playerMode, players } = JSON.parse(req.body) as IBody
      await prisma.playSession.create({
        data: {
          difficulty,
          mode: getPrismaModeByEnum(mode),
          count,
          playerMode: getPrismaGameTypeByEnum(playerMode),
          ...getWinner({ answers }),
          players: {
            createMany: {
              data: players.map(p => ({ playerId: p.id == 'bot' ? null : p.id })),
            },
          },
          correctAnswers: {
            createMany: {
              data: answers.map(a => ({ correctAnsweredUserId: a.userId == 'bot' ? null : (a.userId as string), time: a.timeMs })),
            },
          },
        },
      })
      return res.status(201).json({ message: 'success' })
    } catch (e) {
      return res.status(400).json({ error: e })
    }
  }
}
