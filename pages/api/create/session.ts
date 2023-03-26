import { NextApiRequest, NextApiResponse } from 'next'
import prisma from '@/prisma/client'
import { Difficulties, Modes, PlayerModes } from '@/types/export'

interface IBody {
  difficulty: Difficulties
  mode: Modes
  count: number
  playerMode: PlayerModes
  players: { id: string | 'bot' }[]
  answers: { userId: string | 'bot' | null; timeMs: number }[]
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
  return maxUserId
}

export default async function handle(req: NextApiRequest, res: NextApiResponse<unknown>) {
  const { difficulty, mode, count, answers, playerMode, players } = JSON.parse(req.body) as IBody
  const a = await prisma.playSession.create({
    data: {
      difficulty,
      mode: getPrismaModeByEnum(mode),
      count,
      playerMode: getPrismaGameTypeByEnum(playerMode),
      sessionWinner: {
        connect: {
          id: getWinnerFromSession(answers),
        },
      },
      players: {
        createMany: {
          data: players.map(p => ({ playerId: p.id })),
        },
      },
      correctAnswers: {
        createMany: {
          data: answers.map(a => ({ correctAnsweredUserId: a.userId || 'bot', time: a.timeMs })),
        },
      },
    },
  })
  console.log(a)
  return res.status(201).json({ message: a })
}
