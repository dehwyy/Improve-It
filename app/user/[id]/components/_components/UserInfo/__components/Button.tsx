'use client'
import { CircularProgress } from '@mui/material'
import { useUserEditorStore } from '@/app/utils/store/editUserInfoStore'
import useIsSummaryValidFields from '@/app/utils/hooks/UserEditorHooks/useIsSummaryValidFields'
import useSetIsEditAble from '@/app/utils/hooks/UserEditorHooks/useSetIsEditAble'
import { shallow } from 'zustand/shallow'
import useCurrentPageUserId from '@/app/utils/hooks/UserEditorHooks/useCurrentPageUserId'
import { createPortal } from 'react-dom'
import { Teleport } from '@/types/teleport'

const Button = () => {
  useSetIsEditAble()
  const [isLoading, isEditMode, submitFields, fieldsValues] = useUserEditorStore(
    state => [state.isLoading, state.isEditMode, state.submitFields, state.fieldsValues],
    shallow
  )
  const isSummaryValid = useIsSummaryValidFields()
  const id = useCurrentPageUserId() as string
  if (!document.getElementById(Teleport.SubmitButton)) return <></>
  return createPortal(
    <div className="h-16 mt-5">
      <div
        className={`${
          isEditMode ? 'h-full opacity-100 visible border-2' : 'opacity-0 invisible h-0'
        } shadow-lg border-current transition-all text-gray-500`}>
        <button
          onClick={e => submitFields({ id })}
          className={`${
            isSummaryValid ? 'cursor-pointer text-opacity-100 text-gray-100' : 'text-opacity-100 cursor-default text-gray-500'
          } p-[0.8rem] flex items-center justify-center w-full text-2xl usm:text-xl `}>
          {isLoading ? <CircularProgress color="primary" style={{ width: '32px', height: '32px' }} /> : 'Confirm'}
        </button>
      </div>
    </div>,
    document.getElementById(Teleport.SubmitButton) as HTMLElement
  )
}

export default Button
