import { LeaderboardSelectBy } from '@/types/routes'

export default function getOrderBy(by: LeaderboardSelectBy): unknown {
  switch (by) {
    case LeaderboardSelectBy.correctness:
      return { correctAnswers: { _count: 'desc' } }
    case LeaderboardSelectBy.totalCount:
      return { answered: 'desc' }
    default:
      return { answeredPercentage: 'desc' }
  }
}
