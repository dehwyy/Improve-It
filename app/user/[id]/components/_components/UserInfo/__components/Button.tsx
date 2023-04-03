import StyleWrapper from '@/app/components/UI/Wrappers/StyleWrapper'
import { createPortal } from 'react-dom'
import { CircularProgress } from '@mui/material'
import { Teleport } from '@/types/teleport'

interface IProps {
  isValid: boolean
  isEdit: boolean
  isAbleToChange: boolean
  submitNickname: () => void
}

const Button = ({ submitNickname, isEdit, isValid, isAbleToChange }: IProps) => {
  if (!document.getElementById(Teleport.ConfirmProfileInformation)) return <></>
  return createPortal(
    <div className="h-16 mt-5">
      <div
        className={`${
          isEdit ? 'h-full opacity-100 visible border-2' : 'opacity-0 invisible h-0'
        } shadow-lg border-current transition-all text-gray-500`}>
        <button
          onClick={submitNickname}
          className={`${
            isValid && isEdit ? 'cursor-pointer text-opacity-100 text-gray-100' : 'text-opacity-100 cursor-default text-gray-500'
          } p-[0.8rem] flex items-center justify-center w-full text-2xl usm:text-xl `}>
          {isAbleToChange ? 'Confirm' : <CircularProgress color="primary" style={{ width: '32px', height: '32px' }} />}
        </button>
      </div>
    </div>,
    document.getElementById(Teleport.ConfirmProfileInformation) as Element
  )
}

export default Button
