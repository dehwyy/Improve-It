'use client'
import LeaderboardUser from '@/app/leaderboard/components/LeaderboardUser'
import LeaderboardSelectItem from '@/app/leaderboard/components/_components/LeaderboardSelectItem'
import Loader from '@/app/components/UI/Global/Loader'
import { ILeaderboardUser, LeaderboardKey, LeaderboardType } from '@/types/export'
import useLeaderboard from '@/app/utils/hooks/LocalHooks/useLeaderboard'

interface IProps {
  tables: Record<LeaderboardType, ILeaderboardUser[]>
}

const Leaderboard = ({ tables }: IProps) => {
  const { users, setSelectedTypeByKey, setInputValue, inputValue } = useLeaderboard({ tables })
  return (
    <>
      <div className="grid grid-cols-6 my-5 gap-5 lg:flex lg:flex-col">
        <div className="lg:col-span-6 col-span-4 sm:flex-col flex w-full justify-around bg-[#222222] p-5 rounded-md">
          {Object.keys(LeaderboardType).map((key, i) => (
            <LeaderboardSelectItem onClick={() => setSelectedTypeByKey(key as LeaderboardKey)} key={i} text={key} />
          ))}
        </div>
        <div className="lg:col-span-6 col-span-2">
          <input
            value={inputValue}
            onChange={e => setInputValue(e.target.value)}
            className="w-full h-full sm:h-min sm:p-5 bg-transparent outline-0 font-bold text-white text-2xl border-b-2 border-black"
            placeholder="Find user..."
          />
        </div>
      </div>
      <>
        {users ? (
          users.map(user => (
            <LeaderboardUser
              place={user.place}
              key={user.id}
              id={user.id}
              name={user.name as string}
              image={user.image as string}
              correctAnswered={user.correctAnswers.length}
              answered={user.answered}
            />
          ))
        ) : (
          <Loader />
        )}
      </>
    </>
  )
}

export default Leaderboard
