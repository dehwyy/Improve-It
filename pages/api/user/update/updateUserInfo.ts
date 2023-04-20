import { NextApiRequest, NextApiResponse } from 'next'
import updateNickname from '@/app/utils/prismaQueries/user/update/nickname'
import { UserChangeableValues } from '@/app/utils/store/editUserInfoStore'
import updateDescription from '@/app/utils/prismaQueries/user/update/description'

interface IBody extends Partial<UserChangeableValues<string>> {
  userId: string
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { userId, nickname, description } = JSON.parse(req.body) as IBody
    nickname && (await updateNickname(userId, nickname))
    description && (await updateDescription(userId, description))
    return res.status(201).json({ message: 'success' })
  } catch (e) {
    return res.status(400).json({ message: e })
  }
}
