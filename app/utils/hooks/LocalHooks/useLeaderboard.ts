import { useCallback, useEffect, useState } from 'react'
import { useDebounce } from 'usehooks-ts'
import useSWR from 'swr'
import { ApiRoutesUser, LeaderboardSelectBy } from '@/types/routes'
import getFetcher from '@/app/utils/global/getFetcher'
import { done as finishProgressbar, start as startProgressbar } from 'nprogress'
import { ILeaderboardUser, LeaderboardKey, LeaderboardType } from '@/types/export'

interface IArgs {
  tables: Record<LeaderboardType, ILeaderboardUser[]>
}
interface IUser extends ILeaderboardUser {
  place?: number
}
export default function useLeaderboard({ tables }: IArgs) {
  const [selectedType, setSelectedType] = useState<LeaderboardType>(LeaderboardType.Correctness)
  const [inputValue, setInputValue] = useState('')
  const debouncedInputValue = useDebounce<string>(inputValue, 500)
  const addUserPlace = useCallback(
    (users: IUser[]) => {
      const newUsers = [] as IUser[]
      users.forEach(user => {
        const placeOfUser = tables[selectedType].findIndex(globalUser => user.id == globalUser.id) + 1
        newUsers.push({ ...user, place: placeOfUser })
      })
      return newUsers
    },
    [selectedType]
  )
  const setSelectedTypeByKey = useCallback((key: LeaderboardKey) => setSelectedType(LeaderboardType[key as LeaderboardKey]), [])
  const [users, setUsers] = useState<IUser[]>(addUserPlace(tables[selectedType]))

  const { data: fetchedUsers, isLoading } = useSWR(
    `${ApiRoutesUser.getUsersLeaderboard}/${debouncedInputValue || '_'}/${LeaderboardSelectBy[selectedType]}/${5}`,
    getFetcher<{ users: ILeaderboardUser[] }>()
  )
  useEffect(() => {
    ;(isLoading ? startProgressbar : finishProgressbar)()
  }, [isLoading])
  useEffect(() => {
    if (fetchedUsers) {
      setUsers(addUserPlace(fetchedUsers.users))
    }
  }, [fetchedUsers])

  return {
    selectedType,
    setSelectedTypeByKey,
    inputValue,
    setInputValue,
    users,
  }
}
