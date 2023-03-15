import { selectByCorrectAnswered } from '@/app/utils/prismaQueries/leaderboard/selectByCorrectAnswered'
import LeaderboardUser from '@/app/leaderboard/components/LeaderboardUser'
import { getServerSession } from 'next-auth/next'
import { authOptions } from '@/pages/api/auth/[...nextauth]'
import Heading from '@/app/leaderboard/components/Heading'
import AlphaPageWrapper from '@/app/components/UI/Wrappers/_AlphaPageWrapper'
import DefaultPageWrapper from '@/app/components/UI/Wrappers/DefaultPageWrapper'
const Page = async () => {
  const users = await selectByCorrectAnswered()
  const currentUser = await getServerSession(authOptions)
  return (
    <DefaultPageWrapper>
      <Heading />
      <div className="flex flex-col gap-y-5 my-5 w-[90%] mx-auto">
        {users &&
          users.map(user => (
            <LeaderboardUser
              id={user.id}
              name={user.name as string}
              image={user.image as string}
              correctAnswered={user.correctAnswered}
              answered={user.answered}
              currentUserImage={currentUser?.user?.image}
            />
          ))}
      </div>
    </DefaultPageWrapper>
  )
}

export default Page
