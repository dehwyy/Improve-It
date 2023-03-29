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
      console.log('DATA', req.body)
      const user = await prisma.user.findUnique({
        where: { id: userId },
        select: { answered: true, correctAnswers: true },
      })
      await prisma.user.update({
        where: {
          id: userId,
        },
        data: {
          answered: (user?.answered || 0) + answeredCount,
          answeredPercentage: Math.floor(
            (((user?.correctAnswers.length || 0) + answers.map(a => a.userId == userId).length) / ((user?.answered || 0) + answeredCount)) * 100
          ),
        },
      })
      return res.status(201).json({ message: 'success' })
    } catch (e) {
      return res.status(400).json({ message: 'error', error: e })
    }
  }
}
