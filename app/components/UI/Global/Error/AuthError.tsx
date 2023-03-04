'use client'
import { FC, useRef } from 'react'
import { signIn } from 'next-auth/react'
import { CSSTransition } from 'react-transition-group'
import CloseIcon from '@mui/icons-material/Close'
interface IProps {
  isError: boolean
  setError: () => void
}
const AuthError: FC<IProps> = ({ isError, setError }) => {
  const nodeRef = useRef(null)
  console.log(isError)
  return (
    <CSSTransition nodeRef={nodeRef} in={isError} timeout={1000} classNames="error">
      <div
        ref={nodeRef}
        className={`${
          isError ? 'translate-y-[0] opacity-100' : 'mb-[-100px] translate-y-[-100px] opacity-0'
        }  bg-[#555555] block-neo-style p-5 relative text-center text-red-400 transition-all duration-1000 underline decoration-1 underline-offset-4 text-2xl`}>
        <p>
          Please&nbsp;
          <span className="cursor-pointer text-sky-400" onClick={() => signIn()}>
            authorize
          </span>
          &nbsp;to submit score!
        </p>
        <div className="absolute right-2 top-1 cursor-pointer" onClick={setError}>
          <CloseIcon fontSize="large" />
        </div>
      </div>
    </CSSTransition>
  )
}

export default AuthError
