import prisma from '@/prisma/client'
import { NextApiRequest, NextApiResponse } from 'next'

type Answer = { userId: string | 'bot' | null; timeMs: number }

interface IBody {
  answeredCount: number
  userId: string
  answers: Answer[]
}

interface IRes {
  message: string
  error?: unknown
}

export default async function handle(req: NextApiRequest, res: NextApiResponse<IRes>) {
  if (req.method === 'POST') {
    try {
      const { answeredCount, userId, answers } = JSON.parse(req.body) as IBody
      const correctAnsweredCount = answers.reduce((p, current) => p + (current.userId == userId ? 1 : 0), 0)
      const user = await prisma.user.findUnique({
        where: { id: userId },
        select: { answered: true, correctAnsweredCount: true },
      })
      await prisma.user.update({
        where: {
          id: userId,
        },
        data: {
          answered: user!.answered + answeredCount,
          correctAnsweredCount: user!.correctAnsweredCount + correctAnsweredCount,
          answeredPercentage: Math.floor(
            ((user!.correctAnsweredCount + answers.map(a => a.userId == userId).length) / (user!.answered + answeredCount)) * 100
          ),
        },
      })
      return res.status(201).json({ message: 'success' })
    } catch (e) {
      return res.status(400).json({ message: 'error', error: e })
    }
  }
}
