'use client'
import { useEquationResultsStore, useEquationStore, useSingleEquationStore } from '@/app/utils/store/equationStore'
import { shallow } from 'zustand/shallow'
import { FC, useEffect, useMemo, useState } from 'react'
import getEquations from '@/app/utils/tools/EquationGenerator'
import { Modes } from '@/types/export'
import Equation from '@/app/[mathtype]/modes/UI/Equation'
import EquationsWrapper from '@/app/[mathtype]/modes/UI/EquationsWrapper'
import NoImplementation from '@/app/[mathtype]/modes/UI/NoImplementation'
import SubmitButton from '@/app/[mathtype]/modes/UI/SubmitButton'
import { useRouter } from 'next/navigation'
import SolveError from '@/app/components/UI/Global/Error/SolveError'
import { signIn } from 'next-auth/react'

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
  const [isError, setError] = useState(false)
  const [isActiveButton, setActiveButton] = useState(false)
  const [isErrorOnActiveButton, setErrorOnActiveButton] = useState(false)
  useEffect(() => {
    setRendered(true)
  }, [])
  useEffect(() => {
    setError(false)
    setErrorOnActiveButton(false)
  }, [trigger, diff, count])
  useEffect(() => {
    if (answeredCount === count) {
      setActiveButton(true)
    }
  }, [answeredCount])
  const equations = useMemo(() => Array.from(getEquations(currentPage, diff, count)), [diff, count, trigger])
  const handleSubmitButton = async () => {
    if (count !== answeredCount) {
      window.scrollTo(0, 0)
      setErrorOnActiveButton(true)
      return
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
    } else {
      setError(true)
    }
  }

  const activeEquation = useSingleEquationStore(state => state.activeEquation)

  if (!hasRendered) return <div></div>
  return equations && equations[0][0] ? (
    <>
      <SolveError setTrigger={() => setError(false)} trigger={isError}>
        Please&nbsp;
        <span className="cursor-pointer text-sky-400 " onClick={() => signIn()}>
          authorize
        </span>
        &nbsp;to submit score!
      </SolveError>
      <SolveError setTrigger={() => setErrorOnActiveButton(false)} trigger={isErrorOnActiveButton}>
        You can only submit when solve <span className="text-green-300">all</span> the equations!
      </SolveError>
      <div className={`${isError || isErrorOnActiveButton ? 'h-[100px] vsm:h-[125px]' : 'h-12'} w-full transition-all duration-1000`} />
      <EquationsWrapper>
        {equations.map((eq, i) => {
          const [equation, res] = eq
          return <Equation isActiveEquation={i === activeEquation} currentPage={currentPage} key={i} index={i} equation={equation} res={res} />
        })}
      </EquationsWrapper>
      <div className="pt-3">
        <SubmitButton handleClick={handleSubmitButton} isActive={isActiveButton} />
      </div>
    </>
  ) : (
    <NoImplementation />
  )
}
export default Mode
