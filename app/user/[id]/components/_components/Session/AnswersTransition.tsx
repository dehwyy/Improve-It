'use client'
import { useState } from 'react'
import { Collapse } from '@mui/material'
import StyleWrapper from '@/app/components/UI/Wrappers/StyleWrapper'
interface IProps {
  children: React.ReactNode
  full: React.ReactNode
}

const AnswersTransition = ({ children, full }: IProps) => {
  const [isOpen, setOpen] = useState(false)
  const [isShowButtonVisible, setShowButtonVisible] = useState(true)
  const [isCloseButtonVisible, setCloseButtonVisible] = useState(false)
  const setState = (flag: boolean) => {
    // true if CloseButton should be visible
    setCloseButtonVisible(flag)
    setOpen(flag)
    setShowButtonVisible(!flag)
  }
  return (
    <>
      {children}
      <Collapse in={isOpen} className="px-5">
        {full}
      </Collapse>
      {isShowButtonVisible && (
        <StyleWrapper
          style={{ padding: '10px' }}
          className="text-sky-400 shadow-sky-400 border-current shadow-lg mt-[-1.25rem] text-center"
          onClick={() => setState(true)}>
          Detailed
        </StyleWrapper>
      )}
      {isCloseButtonVisible && (
        <StyleWrapper className="text-sky-400 shadow-sky-400 border-current shadow-lg" style={{ padding: '10px' }} onClick={() => setState(false)}>
          Close
        </StyleWrapper>
      )}
    </>
  )
}

export default AnswersTransition
