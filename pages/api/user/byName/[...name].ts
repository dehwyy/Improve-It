import { NextApiRequest, NextApiResponse } from 'next'
import { selectByName } from '@/app/utils/prismaQueries/leaderboard/selectByName'

interface Request extends NextApiRequest {
  query: {
    name: string
  }
}

export default async function handler(req: Request, res: NextApiResponse) {
  const { name } = req.query
  const users = await selectByName(name == 'null' ? '' : name)
  return res.status(201).json({ users })
}
