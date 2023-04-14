'use client'
import { CircularProgress } from '@mui/material'
import { useUserEditorStore } from '@/app/utils/store/editUserInfoStore'
import useIsSummaryValidFields from '@/app/utils/hooks/UserEditorHooks/useIsSummaryValidFields'
import { shallow } from 'zustand/shallow'
import useCurrentPageUserId from '@/app/utils/hooks/UserEditorHooks/useCurrentPageUserId'

const Button = () => {
  const [isLoading, isEditMode, submitFields, hasAccessToEdit, setEditMode] = useUserEditorStore(
    state => [state.isLoading, state.isEditMode, state.submitFields, state.hasAccessToEdit, state.setEditMode],
    shallow
  )
  const isSummaryValid = useIsSummaryValidFields()
  const id = useCurrentPageUserId() as string
  return hasAccessToEdit ? (
    <div className="h-16 mt-5">
      <div className={`${isSummaryValid ? 'text-blue-600' : 'text-gray-600 '} border-4 h-full shadow-lg border-current rounded-xl transition-all`}>
        <button
          onClick={() => {
            if (isEditMode) {
              submitFields({ id })
            } else {
              setEditMode(true)
            }
          }}
          className={`${
            isSummaryValid ? 'cursor-pointer text-opacity-100 text-gray-100' : 'text-opacity-100 cursor-default text-gray-500'
          } p-[0.8rem] flex items-center justify-center w-full text-2xl usm:text-xl h-full`}>
          {isLoading ? <CircularProgress color="primary" style={{ width: '32px', height: '32px' }} /> : isEditMode ? 'Confirm' : 'Edit'}
        </button>
      </div>
    </div>
  ) : (
    <></>
  )
}

export default Button
