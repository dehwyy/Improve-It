'use client'
import ErrorSignIn from '@/app/components/UI/Global/Errors/ErrorSignIn'
import { useState } from 'react'
import CloseIcon from '@mui/icons-material/Close'

const ErrorMustSignIn = ({ children, userId }: { children: React.ReactNode; userId?: string }) => {
  const [error, setError] = useState(false)
  return (
    <>
      <span onClick={() => !userId && !error && setError(true)}>{error ? <></> : children}</span>
      <span className="z-10 flex">
        <div
          className={`${
            error ? 'bottom-12 opacity-100 visible' : 'bottom-4 opacity-0 invisible'
          } mt-5 fixed bottom-0 right-5 transition-all duration-1000`}>
          <ErrorSignIn />
          <div
            onClick={() => setError(false)}
            className="absolute top-[-6px] right-[-6px] border-red-500 border-2 cursor-pointer rounded-full bg-[#333333]">
            <CloseIcon sx={{ color: '#ef4444' }} />
          </div>
        </div>
        {error ? children : <></>}
      </span>
    </>
  )
}

export default ErrorMustSignIn
