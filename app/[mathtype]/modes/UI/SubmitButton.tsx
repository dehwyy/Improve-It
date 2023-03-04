'use client'
import { FC, forwardRef, useEffect, useImperativeHandle, useRef } from 'react'
import { Button } from '@mui/material'
import { btnWhiteTheme } from '@/app/utils/consts/mui'

interface IProps {
  handleClick: () => void
  isActive: boolean
}

const SubmitButton: FC<IProps> = ({ handleClick, isActive }) => {
  const submitButtonRef = useRef<HTMLButtonElement>(null)
  useEffect(() => {
    if (submitButtonRef.current && isActive) {
      submitButtonRef.current.style.color = 'white'
    }
  }, [isActive])
  return (
    <div className="text-end pr-5">
      <Button ref={submitButtonRef} variant="contained" sx={{ ...btnWhiteTheme, color: '#777777' }} onClick={handleClick}>
        Submit score
      </Button>
    </div>
  )
}

export default SubmitButton
