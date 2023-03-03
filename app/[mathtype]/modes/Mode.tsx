'use client'
import { useEquationResultsStore, useEquationStore } from '@/app/utils/store/equationStore'
import { shallow } from 'zustand/shallow'
import { FC, useEffect, useMemo, useState } from 'react'
import getEquations from '@/app/utils/tools/EquationGenerator'
import { Modes } from '@/types/export'
import Equation from '@/app/[mathtype]/modes/UI/Equation'
import EquationsWrapper from '@/app/[mathtype]/modes/UI/EquationsWrapper'
import NoImplementation from '@/app/[mathtype]/modes/UI/NoImplementation'
import SubmitButton from '@/app/[mathtype]/modes/UI/SubmitButton'
import { useRouter } from 'next/navigation'

interface IProps {
  currentPage: Modes
}

const Mode: FC<IProps> = ({ currentPage }) => {
  const router = useRouter()

  const [diff, count, trigger] = useEquationStore(state => [state.diff, state.count, state.trigger], shallow)
  const [answeredCount, correctlyAnsweredCount, reset] = useEquationResultsStore(
    state => [state.answeredCount, state.correctlyAnsweredCount, state.resetCount],
    shallow
  )
  const [hasRendered, setRendered] = useState(false)
  const [isActiveButton, setActiveButton] = useState(false)

  useEffect(() => {
    setRendered(true)
  }, [])
  useEffect(() => {
    if (answeredCount === count) {
      setActiveButton(true)
    }
  }, [answeredCount])
  const equations = useMemo(() => Array.from(getEquations(currentPage, diff, count)), [diff, count, trigger])
  const handleSubmitButton = async () => {
    interface IData {
      answeredCount: number
      correctlyAnsweredCount: number
    }
    const response = await fetch('/api/update/count', {
      method: 'POST',
      body: JSON.stringify({
        answeredCount,
        correctlyAnsweredCount,
      }),
    })
    if (response.ok) {
      router.push(`/result?c=${answeredCount}&cc=${correctlyAnsweredCount}`)
      reset()
    }
  }

  if (!hasRendered) return <div></div>
  return equations && equations[0][0] ? (
    <>
      <EquationsWrapper>
        {equations.map((eq, i) => {
          const [equation, res] = eq
          return <Equation currentPage={currentPage} key={i} equation={equation} res={res} />
        })}
      </EquationsWrapper>
      <SubmitButton handleClick={handleSubmitButton} isActive={isActiveButton} />
    </>
  ) : (
    <NoImplementation />
  )
}
export default Mode
