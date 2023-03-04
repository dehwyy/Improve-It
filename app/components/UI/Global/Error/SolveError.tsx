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
        }  bg-[#555555] w-[100%] py-5 block-neo-style absolute text-center text-red-400 transition-all duration-1000 underline decoration-1 underline-offset-4 md:text-[17px] md:py-2 text-2xl`}>
        <p className="sm:w-[85%] sm:pl-10">{children}</p>
        <div className="absolute right-2 top-1 md:top-0 md:right-0 cursor-pointer" onClick={setTrigger}>
          <CloseIcon fontSize="large" />
        </div>
      </div>
    </CSSTransition>
  )
}

export default SolveError
