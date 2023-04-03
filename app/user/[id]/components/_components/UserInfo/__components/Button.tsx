import StyleWrapper from '@/app/components/UI/Wrappers/StyleWrapper'
import { createPortal } from 'react-dom'
import { ElementsId } from '@/types/buttonId'
import { CircularProgress } from '@mui/material'

interface IProps {
  isValid: boolean
  isEdit: boolean
  isAbleToChange: boolean
  submitNickname: () => void
}

const Button = ({ submitNickname, isEdit, isValid, isAbleToChange }: IProps) => {
  return (
    <div className="absolute top-[6.5rem] usm:top-[40%] left-2 right-2 z-50">
      <StyleWrapper
        style={{ padding: '0', borderWidth: '3px' }}
        className={`${
          isValid && isEdit
            ? 'opacity-100 shadow-blue-500 text-blue-500 visible'
            : isEdit
            ? 'opacity-100 text-[#ef444480] shadow-[#ef444480] visible'
            : 'opacity-0 invisible'
        } shadow-lg border-current`}>
        <button
          onClick={submitNickname}
          className={`${
            isValid && isEdit ? 'cursor-pointer text-opacity-100' : 'text-opacity-100 cursor-default'
          } p-[0.8rem] flex items-center justify-center w-full text-2xl usm:text-xl text-gray-100`}>
          {isAbleToChange ? 'Confirm' : <CircularProgress color="primary" style={{ width: '32px', height: '32px' }} />}
        </button>
      </StyleWrapper>
    </div>
  )
}

export default Button
