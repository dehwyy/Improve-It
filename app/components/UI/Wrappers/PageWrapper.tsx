'use client'
import { useEffect, useState } from 'react'
interface IProps {
  children: React.ReactNode
  classes?: string
}

const PageWrapper = ({ children, classes }: IProps) => {
  const [isMounted, setIsMounted] = useState(false)
  useEffect(() => {
    setIsMounted(true)
  }, [])
  return (
    <div className={`${isMounted ? 'top-0 opacity-100' : 'top-5 opacity-0'} relative transition-all duration-1000`}>
      <div className={`${classes} flex-col flex`}>{children}</div>
    </div>
  )
}

export default PageWrapper
