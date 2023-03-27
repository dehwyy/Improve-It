import prisma from '@/prisma/client'
import { NextApiRequest, NextApiResponse } from 'next'

interface IBody {
  answeredCount: number
  userId: string
}

interface IRes {
  message: string
  error?: unknown
}

export default async function handle(req: NextApiRequest, res: NextApiResponse<IRes>) {
  if (req.method === 'POST') {
    try {
      const { answeredCount, userId } = JSON.parse(req.body) as IBody
      const user = await prisma.user.findUnique({
        where: { id: userId },
        select: { answered: true },
      })
      await prisma.user.update({
        where: {
          id: userId,
        },
        data: {
          answered: (user?.answered || 0) + answeredCount,
        },
      })
      return res.status(201).json({ message: 'success' })
    } catch (e) {
      return res.status(400).json({ message: 'error', error: e })
    }
  }
}
