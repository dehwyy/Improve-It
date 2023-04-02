import { CircularProgress } from '@mui/material'

interface IProps {
  isValid: boolean
  isEdit: boolean
  isAbleToChange: boolean
  submitNickname: () => void
}

const DefaultButton = ({ submitNickname, isEdit, isValid, isAbleToChange }: IProps) => {
  return (
    <div className="w-1/3 sm:w-2/3 usm:w-full mx-auto">
      <button
        onClick={submitNickname}
        className={`${
          isValid && isEdit
            ? 'opacity-100 cursor-pointer border-[#777777]'
            : isEdit
            ? 'opacity-50  cursor-default border-[#555555]'
            : 'opacity-0  cursor-default'
        } mt-2 p-1 rounded border-2 flex items-center justify-center w-full text-[0.8rem]`}>
        {isAbleToChange ? 'Confirm' : <CircularProgress color="error" style={{ width: '19.5px', height: '19.5px' }} />}
      </button>
    </div>
  )
}

export default DefaultButton
