import { usePathname } from 'next/navigation'
import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { useUserStore } from '@/app/utils/store/globalStore'
import { useDebounce } from 'usehooks-ts'
import useSWR from 'swr'
import { ApiRoutesUser } from '@/types/routes'
import getFetcher from '@/app/utils/global/getFetcher'
import { Admin } from '@/types/export'
import { useUserEditorStore } from '@/app/utils/store/editUserInfoStore'
import { shallow } from 'zustand/shallow'
import useCurrentPageUserId from '@/app/utils/hooks/UserEditorHooks/useCurrentPageUserId'

export default function useNickname(name: string, previousNames: string[]) {
  const [setLoading, setValidFields, fieldsValues, setFieldsValues, setInitialValues] = useUserEditorStore(
    state => [state.setLoading, state.setValidFields, state.fieldsValues, state.setFieldsValues, state.setInitialValues],
    shallow
  )
  const currentUserId = useCurrentPageUserId()
  useEffect(() => {
    setInitialValues(name, 'nickname')
  }, [])
  const debouncedValue = useDebounce(fieldsValues.nickname, 500)
  const { data, isLoading } = useSWR(`${ApiRoutesUser.getUserByNickname}/${debouncedValue}`, getFetcher<string>())
  useEffect(() => {
    if (!isLoading && debouncedValue === fieldsValues.nickname) {
      const condition = (debouncedValue.length > 2 && !isLoading && (!data || data == currentUserId)) || previousNames.includes(debouncedValue)
      setValidFields(condition, 'nickname')
      setLoading(false)
    }
  }, [isLoading, debouncedValue])

  const validateAndSetNickname = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.value
    if (name.length > 14) return
    setFieldsValues(name, 'nickname')
  }, [])

  return {
    nickname: fieldsValues.nickname,
    setNickname: validateAndSetNickname,
  }
}
