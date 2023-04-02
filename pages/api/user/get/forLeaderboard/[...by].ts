import { NextApiRequest } from 'next'
import { LeaderboardSelectBy } from '@/types/routes'
import { selectByTemplate } from '@/app/utils/prismaQueries/leaderboard/selectByTemplate'
import getOrderBy from '@/app/utils/global/getLeaderboardOrderFunction'

type Name = string
type Count = string
interface Request extends NextApiRequest {
  query: {
    by: [Name, LeaderboardSelectBy, Count]
  }
}

// url should be like /api/user/forLeaderboard/{NAME||"_"}/${OrderBy:LeaderboardSelectBy}/{COUNT|10}
export default async function handler(req: Request, res: any) {
  try {
    const { by } = req.query
    const [name, orderByType, count] = by
    const orderBy = getOrderBy(orderByType) as OrderBy
    const users = await selectByTemplate({ name, order: orderBy, count: Number(count) })
    return res.status(201).json({ users })
  } catch (e) {
    return res.status(200).json({ error: e })
  }
}
