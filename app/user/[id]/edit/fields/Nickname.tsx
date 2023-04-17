'use client'
import { useUserEditorStore } from '@/app/utils/store/editUserInfoStore'
import { shallow } from 'zustand/shallow'
import { useUserStore } from '@/app/utils/store/globalStore'
import useSWR from 'swr'
import { ApiRoutesUser } from '@/types/routes'
import getFetcher from '@/app/utils/global/getFetcher'
import { useDebounce } from 'usehooks-ts'
import { useEffect, useMemo } from 'react'
import { CircularProgress } from '@mui/material'

interface IProps {
  name: string
}

const Nickname = ({ name }: IProps) => {
  const id = useUserStore(state => state.userId) as string
  const [submitField, fieldsValues, setFieldsValues, initialValues] = useUserEditorStore(
    state => [state.submitFields, state.fieldsValues, state.setFieldsValues, state.initialValues],
    shallow
  )
  const debouncedValue = useDebounce(fieldsValues.nickname, 500)
  const { data, isLoading } = useSWR(`${ApiRoutesUser.getUserByNickname}/${debouncedValue}`, getFetcher<string>())
  const isShowingLoader = useMemo(() => {
    return (debouncedValue !== fieldsValues.nickname || isLoading) && !(fieldsValues.nickname == initialValues.nickname)
  }, [debouncedValue, fieldsValues.nickname, isLoading, initialValues])
  const isNotShowingText = useMemo(() => {
    return debouncedValue != fieldsValues.nickname || fieldsValues.nickname == initialValues.nickname || isLoading
  }, [debouncedValue, fieldsValues.nickname, initialValues.nickname, isLoading])
  const isAbleToSubmit = useMemo(() => {
    return !data && fieldsValues.nickname.length > 3
  }, [data, fieldsValues.nickname])
  return (
    <span className="flex gap-3 flex-col w-full p-5 !pt-0">
      <span className="text-gray-300 pl-1">Nickname:</span>
      <span className="rounded-xl overflow-hidden border-2 border-transparent focus-within:border-fuchsia-500">
        <input
          value={fieldsValues.nickname}
          onChange={e => setFieldsValues(e.target.value, 'nickname')}
          maxLength={20}
          className="w-full text-bold text-2xl p-2 outline-0"
        />
      </span>
      <span className={`${isAbleToSubmit ? 'text-blue-500 underline' : 'text-red-800 line-through'} flex transition-all`}>
        <span className="text-2xl text-center w-full relative">
          {isShowingLoader && (
            <span className="absolute translate-x-1/2 right-1/2">
              <CircularProgress color="secondary" style={{ height: '40px', width: '40px' }} />
            </span>
          )}
          <span className={`${isNotShowingText ? 'opacity-0' : 'opacity-100'} transition-all`}>
            <span
              onClick={() => isAbleToSubmit && submitField({ id, key: 'nickname' })}
              className={`${isAbleToSubmit ? 'cursor-pointer' : 'cursor-default'} p-1 select-none`}>
              Save
            </span>
          </span>
        </span>
      </span>
    </span>
  )
}

export default Nickname
