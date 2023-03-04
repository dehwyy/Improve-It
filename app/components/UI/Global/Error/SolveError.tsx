'use client'
import { FC, useRef } from 'react'
import { signIn } from 'next-auth/react'
import { CSSTransition } from 'react-transition-group'
import CloseIcon from '@mui/icons-material/Close'
interface IProps {
  children: React.ReactNode
  trigger: boolean
  setTrigger: () => void
}
const SolveError: FC<IProps> = ({ children, trigger, setTrigger }) => {
  const nodeRef = useRef(null)
  return (
    <CSSTransition nodeRef={nodeRef} in={trigger} timeout={1000} classNames="error">
      <div
        ref={nodeRef}
        className={`${
          trigger ? 'translate-y-[0] opacity-100' : 'mb-[-70px] translate-y-[-50px] opacity-0'
        }  bg-[#555555] block-neo-style p-5 relative text-center text-red-400 transition-all duration-1000 underline decoration-1 underline-offset-4 text-2xl`}>
        <p>{children}</p>
        <div className="absolute right-2 top-1 cursor-pointer" onClick={setTrigger}>
          <CloseIcon fontSize="large" />
        </div>
      </div>
    </CSSTransition>
  )
}

export default SolveError
