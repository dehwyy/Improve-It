import prisma from '@/prisma/client'
import { NextApiRequest, NextApiResponse } from 'next'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/pages/api/auth/[...nextauth]'

interface IBody {
  answeredCount: number
  correctlyAnsweredCount: number
}

interface IRes {
  message: string
  error?: unknown
}

export default async function handle(req: NextApiRequest, res: NextApiResponse<IRes>) {
  try {
    if (req.method === 'POST') {
      const { answeredCount, correctlyAnsweredCount } = JSON.parse(req.body) as IBody
      const data = await getServerSession(req, res, authOptions)
      const user = await prisma.user.findFirst({
        where: {
          name: data?.user?.name,
        },
        select: {
          answered: true,
          correctAnswered: true,
          id: true,
        },
      })
      if (!user) return

      await prisma.user.update({
        data: {
          answered: user.answered + answeredCount,
          correctAnswered: user.correctAnswered + correctlyAnsweredCount,
        },
        where: {
          id: user.id,
        },
      })
      return res.status(201).json({ message: 'success' })
    }
  } catch (e) {
    return res.status(400).json({ message: 'error', error: e })
  }
}
