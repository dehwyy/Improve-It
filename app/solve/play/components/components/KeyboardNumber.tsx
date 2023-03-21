import StyledWrapper from '@/app/components/UI/Wrappers/StyleWrapper'
import { useInputStore } from '@/app/utils/store/inputStore'
import { useCallback } from 'react'

interface IProps {
  n: Exclude<InputKey, 'Backspace'> | React.ReactNode
  isReactNode?: boolean
}
const KeyboardNumber = ({ n, isReactNode = false }: IProps) => {
  const setKey = useInputStore(state => state.setPressedKey)
  const clickHandler = useCallback(() => {
    const key = isReactNode ? 'Backspace' : (n as number | '-')
    setKey(key)
  }, [])
  return (
    <StyledWrapper className="text-violet-500 shadow-violet-500/100 shadow-md border-current sm:p-2" onClick={clickHandler}>
      <span className="text-white font-extrabold text-2xl">{n}</span>
    </StyledWrapper>
  )
}

export default KeyboardNumber
