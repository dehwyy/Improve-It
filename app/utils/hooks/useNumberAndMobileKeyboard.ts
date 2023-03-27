import { ChangeEvent, KeyboardEvent, useCallback, useEffect, useState } from 'react'
import { useInputStore } from '@/app/utils/store/inputStore'
import { shallow } from 'zustand/shallow'

interface IArgs {
  onEnterPress: () => void
  enterDependencies: unknown[]
  maxInputLength: number
}
export default function useNumberAndMobileKeyboard({ onEnterPress, enterDependencies, maxInputLength }: IArgs) {
  const [prevKey, trigger] = useInputStore(state => [state.previousKey, state.trigger], shallow)
  const [inputValue, setInputValue] = useState<string>('')

  useEffect(() => {
    if (prevKey == 'Backspace') setInputValue(p => p.slice(0, p.length - 1))
    else if (prevKey == '-' && !inputValue) setInputValue(p => '-')
    else inputHandler(null, inputValue + prevKey)
  }, [prevKey, trigger])

  const inputHandler = useCallback(
    (e: ChangeEvent<HTMLInputElement> | null, newStringByMobileKeyboard?: string) => {
      const newInputValue = e ? e.target.value : (newStringByMobileKeyboard as string)
      // condition №1 (1: if InputChar is Number or equals "-" at the beginning, 2: maxLength balancer, to prevent very big nums
      const conditionIfValidInput =
        newInputValue.match(/^-?[0-9]*$/) && (Number(newInputValue) || newInputValue == '-') && newInputValue.length <= maxInputLength + 2
      // OR condition №2 (backspace or inputReset)
      const conditionIfBackspace = inputValue.length > newInputValue.length
      if (conditionIfValidInput || conditionIfBackspace || newInputValue == '') {
        setInputValue(newInputValue)
      }
    },
    [inputValue, prevKey]
  )
  const keyupHandler = useCallback((e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      onEnterPress()
    }
  }, enterDependencies)
  return {
    setInputValue: inputHandler,
    inputValue,
    keyupHandler,
  }
}
