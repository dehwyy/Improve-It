import { NextApiRequest, NextApiResponse } from 'next'
import updateNickname from '@/app/utils/prismaQueries/user/update/nickname'
import { UserChangeableValues } from '@/app/utils/store/editUserInfoStore'
import updateDescription from '@/app/utils/prismaQueries/user/update/description'
import updateProfileImage from '@/app/utils/prismaQueries/user/update/profileImage'

interface IBody extends Partial<UserChangeableValues<string>> {
  userId: string
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { userId, nickname, description, img } = JSON.parse(req.body) as IBody
    console.log(img, userId)
    nickname && (await updateNickname(userId, nickname))
    description && (await updateDescription(userId, description))
    img && (await updateProfileImage(userId, img))

    return res.status(201).json({ message: 'success' })
  } catch (e) {
    return res.status(400).json({ message: e })
  }
}
