import { usePathname } from 'next/navigation'
import { useCallback, useMemo, useRef, useState } from 'react'
import { useUserStore } from '@/app/utils/store/globalStore'
import { useDebounce } from 'usehooks-ts'
import useSWR from 'swr'
import { ApiRoutesUser } from '@/types/routes'
import getFetcher from '@/app/utils/global/getFetcher'
import useSWRMutation from 'swr/mutation'
import postFetcher from '@/app/utils/global/postFetcher'
import { Admin } from '@/types/export'

export default function useNickname(name: string, previousNames: string[]) {
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
    return (debouncedValue.length > 2 && !isLoading && (!data || data == currentUserId)) || previousNames.includes(debouncedValue)
  }, [isLoading])

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
  const submitNewNicknameHandler = useCallback(() => {
    if (initialName !== newNickname && isValid && !isLoading) {
      setEdit(false)
      setInitialName(newNickname)
      submitNickname({ userId: currentUserId, newNickname }).then(() => {})
    }
  }, [isValid])
  const exitEditMode = useCallback(() => {
    setEdit(false)
    setNewNickname(initialName)
  }, [initialName])
  return {
    onClickAway: exitEditMode,
    isEditable: currentUserId === sessionUserId || sessionUserId === Admin.id,
    isEdit,
    isValid: (debouncedValue.length > 2 && !isLoading && (!data || data == currentUserId)) || previousNames.includes(debouncedValue),
    isAbleToChange: debouncedValue === newNickname && !isLoading,
    newNickname,
    setNickname,
    toggleEdit: changeEditState,
    submitNickname: submitNewNicknameHandler,
  }
}
