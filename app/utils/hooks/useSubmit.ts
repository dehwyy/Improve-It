import { useCallback, useState } from 'react'
import { useEquationAnimationStore, useEquationStore } from '@/app/utils/store/equationStore'
import { shallow } from 'zustand/shallow'

interface IArgs {
  setInputValue: (e: null, newInputValue: string) => void
  inputValue: string
}

export default function useSubmit({ setInputValue, inputValue }: IArgs) {
  const [setAnswerState, page, setPage] = useEquationStore(state => [state.setAnswer, state.page, state.setPage], shallow)
  const setAnimation = useEquationAnimationStore(state => state.setAnimation)
  const [isTruthy, setTruthy] = useState(false)
  const [startTime, setStartTime] = useState(Date.now())

  const submitEquation = useCallback(
    ({ isTruthy }: { isTruthy: boolean }) => {
      setAnswerState({ isTruthy, startTimeMs: startTime, idx: page })
      setTruthy(isTruthy)
      setTimeout(() => {
        setAnimation(true)
        setInputValue(null, '')
      }, 50)
      setTimeout(() => {
        setAnimation(false)
        setStartTime(Date.now())
        setPage(page + 1)
      }, 1050)
    },
    [startTime, page, inputValue]
  )

  return { startTime, isTruthy, submitEquation }
}
