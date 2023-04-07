import { NextApiRequest, NextApiResponse } from 'next'
import updateNickname from '@/app/utils/prismaQueries/user/update/nickname'

interface IBody {
  userId: string
  nickname: string
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { nickname, userId } = JSON.parse(req.body) as IBody
    nickname && (await updateNickname(userId, nickname))
    return res.status(201).json({ message: 'success' })
  } catch (e) {
    return res.status(400).json({ message: e })
  }
}
