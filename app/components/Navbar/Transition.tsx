import React, { FC, useRef } from 'react'
import { CSSTransition } from 'react-transition-group'
import { useNavbarStore } from '@/app/utils/store/componentsStore'

interface IProps {
  children: React.ReactNode
}

const Transition: FC<IProps> = ({ children }) => {
  const isExpanded = useNavbarStore(state => state.isOpened)
  const nodeRef = useRef(null)

  return (
    <CSSTransition in={isExpanded} nodeRef={nodeRef} timeout={1500} classNames="navbar">
      <div
        ref={nodeRef}
        className={`${
          isExpanded ? 'w-screen ' : 'w-[30rem] rounded-bl-3xl border-l-4 pr-0 vsm:w-screen vsm:min-w-[300px]'
        } h-[100px] bg-white border-b-4 border-black flex items-center
        `}>
        <div
          className={
            (isExpanded ? 'gap-x-12 justify-evenly ' : 'justify-evenly ') + 'gap-x-1 flex max-w-screen w-full transition-all duration-[1500ms]'
          }>
          {children}
        </div>
      </div>
    </CSSTransition>
  )
}

export default Transition
