import { selectByCorrectAnswered } from '@/app/utils/prismaQueries/leaderboard/selectByCorrectAnswered'
import LeaderboardUser from '@/app/leaderboard/components/LeaderboardUser'
import { getServerSession } from 'next-auth/next'
import { authOptions } from '@/pages/api/auth/[...nextauth]'
import Heading from '@/app/leaderboard/components/Heading'
const Page = async () => {
  const users = await selectByCorrectAnswered()
  const currentUser = await getServerSession(authOptions)
  return (
    <div className="mx-auto md:w-full flex flex-col">
      <Heading />
      <div className="flex flex-col gap-y-5 my-5">
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
    </div>
  )
}

export default Page
