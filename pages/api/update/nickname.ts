import { NextApiRequest, NextApiResponse } from 'next'
import prisma from '@/prisma/client'

interface IBody {
  userId: string
  newNickname: string
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { newNickname, userId } = JSON.parse(req.body) as IBody
    await prisma.user.update({
      where: {
        id: userId,
      },
      data: {
        nickname: newNickname,
      },
    })
    return res.status(201).json({ message: 'success' })
  } catch (e) {
    return res.status(400).json({ message: e })
  }
}
