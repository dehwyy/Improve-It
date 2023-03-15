import { ChangeEvent, FC, KeyboardEvent, useCallback, useEffect, useState } from 'react'
import { useAlphaEquationStore } from '@/app/utils/store/alpha-equationStore'
import SuccessAnimation from '@/app/alpha-solve/play/components/components/SuccessAnimation'
import { Gothic_A1 } from '@next/font/google'
import Redirect from '@/app/alpha-solve/play/components/components/Redirect'

const mathFont = Gothic_A1({
  subsets: ['latin'],
  weight: '700',
})

interface IProps {
  setNextPage: () => void
  idx: number
  correctAnswer: number
  equation: string
}

const SingleEquation: FC<IProps> = ({ setNextPage, idx, correctAnswer, equation }) => {
  const setAnswerState = useAlphaEquationStore(state => state.setAnswer)
  const [startTime, setStartTime] = useState(Date.now())
  const [inputValue, setInputValue] = useState<string>('')
  const [isAnimation, setAnimation] = useState(false)
  const [isTruthy, setTruthy] = useState(false)
  useEffect(() => {
    if (correctAnswer === Number(inputValue)) submitEquation({ isTruthy: true })
  }, [inputValue])

  const inputHandler = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const newInputValue = e.target.value
    const conditionIfValidInput = (!isNaN(Number(newInputValue)) || newInputValue == '-') && inputValue.length < 12
    const conditionIfBackspace = inputValue.length > newInputValue.length
    if (conditionIfValidInput || conditionIfBackspace) {
      setInputValue(newInputValue)
    }
  }, [])

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
  if (!equation && !correctAnswer) return <Redirect />
  return !isAnimation ? (
    <>
      <div className={`${mathFont.className} text-5xl w-full vsm:w-[92%] vsm:mx-auto`}>{equation}?</div>
      <div className="pt-12">
        <input
          value={inputValue}
          onChange={inputHandler}
          onKeyUp={keyupHandler}
          autoFocus={true}
          className="border-0 bg-transparent focus-visible:outline-0 text-8xl premd:text-6xl vsm:text-[2.8rem] text-center w-full"
        />
      </div>
    </>
  ) : (
    <SuccessAnimation isSuccess={isTruthy} />
  )
}

export default SingleEquation
