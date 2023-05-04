import { NextApiRequest, NextApiResponse } from 'next'
import updateNickname from '@/app/utils/prismaQueries/user/update/nickname'
import { UserChangeableValues } from '@/app/utils/store/editUserInfoStore'
import updateDescription from '@/app/utils/prismaQueries/user/update/description'
import updateProfileImage from '@/app/utils/prismaQueries/user/update/profileImage'
import updateBackgroundProfileImage from '@/app/utils/prismaQueries/user/update/profileBackgroundImage'

interface IBody extends Partial<UserChangeableValues<string>> {
  userId: string
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { userId, nickname, description, img, backgroundImg } = JSON.parse(req.body) as IBody
    nickname && (await updateNickname(userId, nickname))
    description && (await updateDescription(userId, description))
    img && (await updateProfileImage(userId, img))
    backgroundImg && (await updateBackgroundProfileImage(userId, backgroundImg))

    return res.status(201).json({ message: 'success' })
  } catch (e) {
    return res.status(400).json({ message: e })
  }
}
