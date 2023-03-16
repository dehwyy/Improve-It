import { CSSTransition, SwitchTransition } from 'react-transition-group'
import { useRef } from 'react'
import styled from '@emotion/styled'

const WrapperForTransition = styled.div`
  & .fade-enter {
    opacity: 0;
    transform: scale(0);
  }
  & .fade-exit {
    opacity: 1;
    transform: scale(100%);
  }
  & .fade-enter-active {
    opacity: 1;
    transform: scale(100%);
  }
  & .fade-exit-active {
    opacity: 0;
    transform: scale(0);
  }
  & .fade-enter-active,
  & .fade-exit-active {
    transition: 500ms;
  }
`

interface IProps {
  children: React.ReactNode
  currentStep: number
}
const SolveTransition: React.FC<IProps> = ({ children, currentStep }) => {
  const nodeRef = useRef<HTMLDivElement>(null)
  return (
    <WrapperForTransition>
      <SwitchTransition mode="out-in">
        <CSSTransition
          key={currentStep}
          nodeRef={nodeRef}
          addEndListener={(done: any) => {
            nodeRef!.current!.addEventListener('transitionend', done, false)
          }}
          classNames="fade">
          <div ref={nodeRef}>{children}</div>
        </CSSTransition>
      </SwitchTransition>
    </WrapperForTransition>
  )
}

export default SolveTransition
