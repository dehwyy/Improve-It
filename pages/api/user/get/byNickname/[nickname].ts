import { NextApiRequest, NextApiResponse } from 'next'
import prisma from '@/prisma/client'

interface Request extends NextApiRequest {
  query: {
    nickname: string
  }
}

export default async function handler(req: Request, res: NextApiResponse) {
  const { nickname } = req.query
  const user = await prisma.user.findFirst({
    where: {
      OR: [
        { nickname },
        { name: nickname },
        {
          allNicknames: {
            has: nickname,
          },
        },
      ],
    },
  })
  res.status(201).json(Array.isArray(user) ? user[0]?.id : user?.id)
}
