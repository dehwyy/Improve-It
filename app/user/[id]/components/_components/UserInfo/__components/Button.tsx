'use client'
import { CircularProgress } from '@mui/material'
import { useEditUserInfoStore } from '@/app/utils/store/editUserInfoStore'
import { shallow } from 'zustand/shallow'
import { useMemo } from 'react'
import { useUserStore } from '@/app/utils/store/globalStore'

const Button = () => {
  const id = useUserStore(state => state.userId)
  const [isEdit, submit, isAbleToChange, isValid] = useEditUserInfoStore(
    state => [state.isEdit, state.submitNewValues, state.isAbleToChange, state.isValid],
    shallow
  )
  const isSummaryValid = useMemo(() => {
    return !~Object.values(isValid).findIndex(item => item == false)
  }, [JSON.stringify(isValid)])
  return (
    <div className="h-16 mt-5">
      <div
        className={`${
          isEdit ? 'h-full opacity-100 visible border-2' : 'opacity-0 invisible h-0'
        } shadow-lg border-current transition-all text-gray-500`}>
        <button
          onClick={() => submit(id as string)}
          className={`${
            isSummaryValid ? 'cursor-pointer text-opacity-100 text-gray-100' : 'text-opacity-100 cursor-default text-gray-500'
          } p-[0.8rem] flex items-center justify-center w-full text-2xl usm:text-xl `}>
          {isAbleToChange ? 'Confirm' : <CircularProgress color="primary" style={{ width: '32px', height: '32px' }} />}
        </button>
      </div>
    </div>
  )
}

export default Button
