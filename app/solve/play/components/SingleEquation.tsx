import { ChangeEvent, FC, KeyboardEvent, useCallback, useEffect, useState } from 'react'
import { useEquationStore } from '@/app/utils/store/equationStore'
import SuccessAnimation from '@/app/solve/play/components/components/SuccessAnimation'
import { Gothic_A1 } from '@next/font/google'
import { useInputStore } from '@/app/utils/store/inputStore'
import { shallow } from 'zustand/shallow'

const mathFont = Gothic_A1({
  subsets: ['latin'],
  weight: '700',
})

interface IProps {
  setNextPage: () => void
  idx: number
  correctAnswer: number
  equation: string
  isAnimation: boolean
  setAnimation: React.Dispatch<React.SetStateAction<boolean>>
}

const SingleEquation: FC<IProps> = ({ setNextPage, idx, correctAnswer, equation, setAnimation, isAnimation }) => {
  const setAnswerState = useEquationStore(state => state.setAnswer)
  const [prevKey, trigger] = useInputStore(state => [state.previousKey, state.trigger], shallow)
  const [startTime, setStartTime] = useState(Date.now())
  const [inputValue, setInputValue] = useState<string>('')
  const [isTruthy, setTruthy] = useState(false)
  useEffect(() => {
    if (correctAnswer === Number(inputValue)) submitEquation({ isTruthy: true })
  }, [inputValue])

  useEffect(() => {
    if (prevKey == 'Backspace') setInputValue(p => p.slice(0, p.length - 1))
    else if (prevKey == '-' && !inputValue) setInputValue(p => '-')
    else inputHandler(null, inputValue + prevKey)
  }, [prevKey, trigger])

  const inputHandler = useCallback(
    (e: ChangeEvent<HTMLInputElement> | null, newStringByMobileKeyboard?: string) => {
      const newInputValue = e ? e.target.value : (newStringByMobileKeyboard as string)
      const answerLength = String(correctAnswer).length
      const conditionIfValidInput =
        (!isNaN(Number(newInputValue)) || newInputValue == '-') &&
        ((correctAnswer <= 0 && inputValue.length <= answerLength + 2) || (correctAnswer > 0 && inputValue.length <= answerLength + 1))
      const conditionIfBackspace = inputValue.length > newInputValue.length
      if (conditionIfValidInput || conditionIfBackspace) {
        setInputValue(newInputValue)
      }
    },
    [inputValue, prevKey]
  )

  const submitEquation = useCallback(
    ({ isTruthy }: { isTruthy: boolean }) => {
      setAnswerState({ isTruthy, startTimeMs: startTime, idx })
      setTruthy(isTruthy)
      setTimeout(() => {
        setAnimation(true)
        setInputValue('')
      }, 50)
      setTimeout(() => {
        setAnimation(false)
        setStartTime(Date.now())
        setNextPage()
      }, 1050)
    },
    [startTime, idx]
  )

  const keyupHandler = useCallback(
    (e: KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Enter') submitEquation({ isTruthy: false })
    },
    [startTime, idx]
  )
  return !isAnimation ? (
    <>
      <div className={`${mathFont.className} text-5xl w-full vsm:w-[92%] vsm:mx-auto`}>{equation}?</div>
      <div className="pt-12 sm:pb-2 sm:pt-2">
        <input
          value={inputValue}
          onChange={inputHandler}
          onKeyUp={keyupHandler}
          autoFocus={true}
          className="border-0 max-w-[95%] mx-auto bg-transparent focus-visible:outline-0 text-8xl premd:text-6xl vsm:text-[2.8rem] text-center w-full"
        />
      </div>
    </>
  ) : (
    <SuccessAnimation isSuccess={isTruthy} />
  )
}

export default SingleEquation
