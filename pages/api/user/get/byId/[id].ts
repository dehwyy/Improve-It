import { NextApiRequest, NextApiResponse } from 'next'
import { getUserById } from '@/app/utils/prismaQueries/user/getUserById'
import { User } from 'next-auth'

interface IRes {
  user?: User | IBotType
  error?: unknown
}

interface Request extends NextApiRequest {
  query: {
    id: string
  }
}

const BotInformation = {
  name: 'Bot',
  image: '/images/bot.png',
}
type IBotType = typeof BotInformation

export default async function handle(req: Request, res: NextApiResponse<IRes>) {
  if (req.query.id == 'bot') return res.status(201).json({ user: BotInformation })
  try {
    const user = await getUserById(req.query.id)
    if (!user) return Promise.reject(Error('NOT FOUND 404'))
    return res.status(201).json({ user })
  } catch (e) {
    return res.status(404).json({ error: e })
  }
}
