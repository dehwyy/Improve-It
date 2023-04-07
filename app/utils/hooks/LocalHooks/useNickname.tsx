import { usePathname } from 'next/navigation'
import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { useUserStore } from '@/app/utils/store/globalStore'
import { useDebounce } from 'usehooks-ts'
import useSWR from 'swr'
import { ApiRoutesUser } from '@/types/routes'
import getFetcher from '@/app/utils/global/getFetcher'
import { Admin } from '@/types/export'
import { useEditUserInfoStore } from '@/app/utils/store/editUserInfoStore'
import { shallow } from 'zustand/shallow'

export default function useNickname(name: string, previousNames: string[]) {
  const [isEdit, setEdit, setValid, isEditable, setEditable, setNickname, nickname, submittedNickname] = useEditUserInfoStore(
    state => [
      state.isEdit,
      state.setEdit,
      state.setValid,
      state.isEditable,
      state.setEditable,
      state.setNickname,
      state.nickname,
      state.submittedNickname,
    ],
    shallow
  )
  const sessionUserId = useUserStore(state => state.userId)
  const path = usePathname()
  const currentUserId = useMemo(() => {
    return path?.split('/').at(-1)
  }, [path])
  const [newNickname, setNewNickname] = useState(name)
  const debouncedValue = useDebounce(newNickname, 500)
  const { data, isLoading } = useSWR(`${ApiRoutesUser.getUserByNickname}/${nickname}`, getFetcher<string>())

  useEffect(() => {
    setValid((nickname.length > 2 && !isLoading && (!data || data == currentUserId)) || previousNames.includes(nickname), 'nickname')
  }, [isLoading, nickname])

  useEffect(() => {
    setEditable(currentUserId === sessionUserId || sessionUserId === Admin.id)
  }, [sessionUserId])

  useEffect(() => {
    setNickname(debouncedValue)
  }, [debouncedValue])

  useEffect(() => {
    submittedNickname.length && setNewNickname(submittedNickname)
  }, [submittedNickname])

  const validateAndSetNickname = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.value
    if (name.length > 14) return
    setNewNickname(name)
  }, [])

  const changeEditState = useCallback(() => {
    setEdit(!isEdit)
    setNewNickname(submittedNickname || name)
  }, [submittedNickname, isEdit])

  const exitEditMode = useCallback(() => {
    setEdit(false)
    setNewNickname(submittedNickname || name)
  }, [submittedNickname])
  return {
    onClickAway: exitEditMode,
    isEditable,
    isEdit,
    newNickname,
    setNickname: validateAndSetNickname,
    toggleEdit: changeEditState,
  }
}
