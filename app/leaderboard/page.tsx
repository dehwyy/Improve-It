import { selectByCorrectAnswered } from '@/app/utils/prismaQueries/leaderboard/selectByCorrectAnswered'
import Heading from '@/app/leaderboard/components/Heading'
import PageWrapper from '@/app/components/UI/Wrappers/PageWrapper'
import TopPageLoader from '@/app/components/UI/Global/TopPageLoader'
import Leaderboard from '@/app/leaderboard/components/Leaderboard'
import { selectByAnsweredCount } from '@/app/utils/prismaQueries/leaderboard/selectByAnsweredCount'
import { selectByPercentage } from '@/app/utils/prismaQueries/leaderboard/selectByPercentage'
const Page = async () => {
  const byCorrectAnswered = selectByCorrectAnswered()
  const byAnsweredCount = selectByAnsweredCount()
  const byPercentage = selectByPercentage()
  const userList = await Promise.all([byCorrectAnswered, byAnsweredCount, byPercentage])
  return (
    <>
      <TopPageLoader />
      <PageWrapper classes="mx-auto md:w-full">
        <Heading />
        <div className="flex flex-col gap-y-5 my-5">{userList && <Leaderboard userList={userList} />}</div>
      </PageWrapper>
    </>
  )
}

export default Page
