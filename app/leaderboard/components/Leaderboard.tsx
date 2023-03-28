'use client'
import { useEffect, useState } from 'react'
import LeaderboardUser from '@/app/leaderboard/components/LeaderboardUser'
import { useUserStore } from '@/app/utils/store/globalStore'
import LeaderboardSelectItem from '@/app/leaderboard/components/_components/LeaderboardSelectItem'
import useSWR from 'swr'
import { ApiRoutes } from '@/types/routes'
import getFetcher from '@/app/utils/global/getFetcher'
import Loader from '@/app/components/UI/Global/Loader'

enum LeaderboardType {
  'Correctness',
  'Total answers',
  'Correctness percentage',
}
type leaderboardKey = keyof typeof LeaderboardType
interface IUser {
  id: string
  name: string | null
  image: string | null
  correctAnswers: unknown[]
  answered: number
}
interface IProps {
  userList: IUser[][]
}

const Leaderboard = ({ userList }: IProps) => {
  const currentUserId = useUserStore(state => state.userId)
  const [selectedType, setSelectedType] = useState<LeaderboardType>(LeaderboardType.Correctness)
  const [users, setUsers] = useState<IUser[]>(userList[selectedType])
  const [inputValue, setInputValue] = useState('')
  // const { data: usersByName, isLoading } = useSWR(`${ApiRoutes.getUserByName}/${inputValue || 'null'}`, getFetcher<{ users: IUser[] }>())
  useEffect(() => {
    setUsers(userList[selectedType])
  }, [selectedType])
  return (
    <>
      <div className="grid grid-cols-6 my-5 gap-5">
        <div className="col-span-4 flex w-full justify-around bg-[#222222] p-5 rounded-md">
          {Object.keys(LeaderboardType).map((key, i) =>
            isNaN(Number(key)) ? (
              <LeaderboardSelectItem onClick={() => setSelectedType(LeaderboardType[key as leaderboardKey])} key={i} text={key} />
            ) : (
              <></>
            )
          )}
        </div>
        <div className="col-span-2">
          <input
            className="w-full h-full bg-transparent outline-0 font-bold text-white text-2xl border-b-2 border-black"
            placeholder="Enter name..."
          />
        </div>
      </div>

      <>
        {users ? (
          users.map(user => (
            <LeaderboardUser
              id={user.id}
              name={user.name as string}
              image={user.image as string}
              correctAnswered={user.correctAnswers.length}
              answered={user.answered}
              currentUserId={currentUserId}
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
