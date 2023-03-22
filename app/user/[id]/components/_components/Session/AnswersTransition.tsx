'use client'
import { useState } from 'react'
import { Collapse } from '@mui/material'
import StyleWrapper from '@/app/components/UI/Wrappers/StyleWrapper'
import styled from '@emotion/styled'
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
      <Collapse in={isOpen}>{full}</Collapse>
      {isShowButtonVisible && (
        <StyleWrapper
          className="text-teal-500 shadow-teal-500 border-current shadow-lg mt-[-1.25rem]"
          style={{ padding: '10px' }}
          onClick={() => setState(true)}>
          detailed info...
        </StyleWrapper>
      )}
      {isCloseButtonVisible && (
        <StyleWrapper className="text-teal-500 shadow-teal-500 border-current shadow-lg" style={{ padding: '10px' }} onClick={() => setState(false)}>
          close
        </StyleWrapper>
      )}
    </>
  )
}

export default AnswersTransition
