'use client'
import { FC, useEffect, useRef } from 'react'
import { Button } from '@mui/material'
import { btnWhiteTheme } from '@/app/utils/consts/mui'
import { useEquationResultsStore, useEquationStore } from '@/app/utils/store/equationStore'

interface IProps {
  handleClick: () => void
}

const SubmitButton: FC<IProps> = ({ handleClick }) => {
  const submitButtonRef = useRef<HTMLButtonElement>(null)
  const count = useEquationStore(state => state.count)
  const answeredCount = useEquationResultsStore(state => state.answeredCount)
  useEffect(() => {
    if (submitButtonRef.current) {
      if (answeredCount === count) {
        submitButtonRef.current.style.color = 'white'
      } else {
        submitButtonRef.current.style.color = '#777777'
      }
    }
  }, [answeredCount])
  return (
    <div className="text-end pr-5">
      <Button ref={submitButtonRef} variant="contained" sx={{ ...btnWhiteTheme, color: '#777777' }} onClick={handleClick}>
        Submit score
      </Button>
    </div>
  )
}

export default SubmitButton
