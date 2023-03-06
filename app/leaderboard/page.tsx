import { selectByCorrectAnswered } from '@/app/utils/prismaQueries/leaderboard/selectByCorrectAnswered'
import LeaderboardUser from '@/app/leaderboard/components/UI/LeaderboardUser'
import { Varela_Round } from '@next/font/google'
import { getServerSession } from 'next-auth/next'
import { authOptions } from '@/pages/api/auth/[...nextauth]'

const h1Font = Varela_Round({
  subsets: ['latin'],
  weight: '400',
})
const Page = async () => {
  const users = await selectByCorrectAnswered()
  const currentUser = await getServerSession(authOptions)
  return (
    <div className="mx-auto md:w-full w-[800px] flex flex-col mt-5 p-5 bg-[#555555] block-neo-style pb-10">
      <h1 className={`${h1Font.className} text-center text-7xl uusm:text-6xl text-white vsm:text-[2.85rem] uusm:text-4xl`}>Leaderboard</h1>
      <div className="flex-auto flex flex-col gap-y-5 mt-5">
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
