'use client'
import LeaderboardUser from '@/app/leaderboard/components/LeaderboardUser'
import LeaderboardSelectItem from '@/app/leaderboard/components/_components/LeaderboardSelectItem'
import { ILeaderboardUser, LeaderboardKey, LeaderboardType } from '@/types/export'
import useLeaderboard from '@/app/utils/hooks/LocalHooks/useLeaderboard'
import LeaderboardNoMatching from '@/app/leaderboard/components/_components/LeaderboardNoMatching'
import useInputFocus from '@/app/utils/hooks/GlobalHooks/useInputFocus'

interface IProps {
  tables: Record<LeaderboardType, ILeaderboardUser[]>
}

const Leaderboard = ({ tables }: IProps) => {
  const { users, setSelectedTypeByKey, setInputValue, inputValue, selectedType } = useLeaderboard({ tables })
  const { setFocus, ref } = useInputFocus()
  return (
    <>
      <div className="grid grid-cols-6 my-5 gap-5 lg:flex lg:flex-col">
        <div className="lg:col-span-6 col-span-4 sm:flex-col flex w-full justify-around bg-[#222222] p-2 rounded-md">
          {Object.keys(LeaderboardType).map((key, i) => (
            <LeaderboardSelectItem
              isSelected={LeaderboardType[key as LeaderboardKey] == selectedType}
              onClick={() => setSelectedTypeByKey(key as LeaderboardKey)}
              key={i}
              text={key as LeaderboardKey}
            />
          ))}
        </div>
        <div className="lg:col-span-6 col-span-2">
          <input
            ref={ref}
            value={inputValue}
            onChange={e => setInputValue(e.target.value)}
            className="w-full h-full sm:h-min sm:p-5 bg-transparent outline-0 font-bold text-white text-2xl border-b-2 border-black"
            placeholder="Find user..."
          />
        </div>
      </div>
      <>
        {users.length ? (
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
          <LeaderboardNoMatching setFocus={setFocus} hasInput={inputValue.trim().split(/\s+/).join(' ')} hasUsers={tables.correctness[0]?.id} />
        )}
      </>
    </>
  )
}

export default Leaderboard
