import Heading from '@/app/leaderboard/components/Heading'
import PageWrapper from '@/app/components/UI/Wrappers/PageWrapper'
import TopPageLoader from '@/app/components/UI/Global/TopPageLoader'
import Leaderboard from '@/app/leaderboard/components/Leaderboard'
import { selectByTemplate } from '@/app/utils/prismaQueries/leaderboard/selectByTemplate'
import getOrderBy from '@/app/utils/global/getLeaderboardOrderFunction'
import { LeaderboardSelectBy } from '@/types/routes'
import { ILeaderboardUser, LeaderboardType } from '@/types/export'

const Page = async () => {
  const tables = await Promise.all([
    selectByTemplate({ name: '', order: getOrderBy(LeaderboardSelectBy.correctness) as OrderBy }),
    selectByTemplate({ name: '', order: getOrderBy(LeaderboardSelectBy.totalCount) as OrderBy }),
    selectByTemplate({ name: '', order: getOrderBy(LeaderboardSelectBy.percentage) as OrderBy }),
  ])
  const Tables = {
    correctness: tables[0],
    totalCount: tables[1],
    percentage: tables[2],
  } as Record<LeaderboardType, ILeaderboardUser[]>
  return (
    <>
      <TopPageLoader />
      <PageWrapper classes="mx-auto md:w-full">
        <Heading />
        <div className="flex flex-col gap-y-5 my-5">{tables && <Leaderboard tables={Tables} />}</div>
      </PageWrapper>
    </>
  )
}

export default Page
