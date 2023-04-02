import { usePathname } from 'next/navigation'
import { useCallback, useMemo, useState } from 'react'
import { useUserStore } from '@/app/utils/store/globalStore'
import { useDebounce } from 'usehooks-ts'
import useSWR from 'swr'
import { ApiRoutesUser } from '@/types/routes'
import getFetcher from '@/app/utils/global/getFetcher'
import useSWRMutation from 'swr/mutation'
import postFetcher from '@/app/utils/global/postFetcher'
import { Admin } from '@/types/export'

export default function useNickname(name: string) {
  const sessionUserId = useUserStore(state => state.userId)
  const path = usePathname()
  const currentUserId = useMemo(() => {
    return path?.split('/').at(-1)
  }, [path])

  const [isEdit, setEdit] = useState(false)
  const [newNickname, setNewNickname] = useState(name)
  const [initialName, setInitialName] = useState(name)
  const debouncedValue = useDebounce(newNickname, 500)

  const { data, isLoading } = useSWR(`${ApiRoutesUser.getUserByNickname}/${debouncedValue}`, getFetcher<string>())
  const { trigger: submitNickname } = useSWRMutation(ApiRoutesUser.updateUserNickname, postFetcher)

  const isValid = useMemo(() => {
    return initialName !== debouncedValue && debouncedValue.length > 2 && !isLoading && !data
  }, [debouncedValue, initialName, currentUserId, path, data, isLoading])

  const setNickname = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.value
    if (name.length > 14) return
    setNewNickname(name)
  }, [])
  const changeEditState = useCallback(() => {
    setEdit(p => !p)
    if (initialName !== newNickname) {
      setNewNickname(initialName)
    }
  }, [newNickname, initialName])
  const submitNewNicknameHandler = useCallback(async () => {
    if (initialName !== newNickname && isValid && !isLoading) {
      setEdit(false)
      setInitialName(newNickname)
      await submitNickname({ userId: currentUserId, newNickname })
    }
  }, [newNickname, initialName, isValid, isLoading])
  const exitEditMode = useCallback(() => {
    setEdit(false)
    setNewNickname(initialName)
  }, [initialName])

  return {
    onClickAway: exitEditMode,
    isEditable: currentUserId === sessionUserId || sessionUserId === Admin.id,
    isEdit,
    isValid,
    isAbleToChange: debouncedValue === newNickname && !isLoading,
    newNickname,
    setNickname,
    toggleEdit: changeEditState,
    submitNickname: submitNewNicknameHandler,
  }
}
