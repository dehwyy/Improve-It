import { useCallback, useState } from 'react'
import { useEquationAnimationStore, useEquationStore } from '@/app/utils/store/equationStore'
import { shallow } from 'zustand/shallow'

interface IArgs {
  setInputValue?: (e: null, newInputValue: string) => void
  inputValue?: string
}

export default function useSubmitEquation({ setInputValue, inputValue }: IArgs) {
  const [answers, setAnswerState, page, setPage] = useEquationStore(state => [state.answers, state.setAnswer, state.page, state.setPage], shallow)
  const setAnimation = useEquationAnimationStore(state => state.setAnimation)
  const [startTime, setStartTime] = useState(Date.now())

  const submitEquation = useCallback(
    ({ userId }: { userId: string | 'bot' | null }) => {
      if (answers && answers[page]?.userId) return null
      setAnswerState({ userId, startTimeMs: startTime, idx: page })
      setTimeout(() => {
        setAnimation(true)
        setInputValue && setInputValue(null, '')
      }, 50)
      setTimeout(() => {
        setAnimation(false)
        setStartTime(Date.now())
        setPage(page + 1)
      }, 1050)
    },
    [startTime, page, inputValue]
  )

  return { submitEquation }
}
