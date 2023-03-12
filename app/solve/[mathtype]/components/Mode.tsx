'use client'
import { useEquationResultsStore, useEquationStore, useSingleEquationStore } from '@/app/utils/store/equationStore'
import { shallow } from 'zustand/shallow'
import { start as startProgressbar, done as finishProgressbar } from 'nprogress'
import { FC, useEffect, useMemo, useState } from 'react'
import getEquations from '@/app/utils/tools/equations/EquationModule'
import { Modes } from '@/types/export'
import Equation from '@/app/solve/[mathtype]/components/UI/Equation'
import EquationsWrapper from '@/app/solve/[mathtype]/components/UI/EquationsWrapper'
import NoImplementation from '@/app/solve/[mathtype]/components/UI/NoImplementation'
import SubmitButton from '@/app/solve/[mathtype]/components/UI/SubmitButton'
import { useRouter } from 'next/navigation'
import SolveError from '@/app/components/UI/Global/Error/SolveError'
import { signIn } from 'next-auth/react'
import ErrorAuth from '@/app/solve/[mathtype]/components/Errors/ErrorAuth'
import ErrorAllSubmit from '@/app/solve/[mathtype]/components/Errors/ErrorAllSubmit'

interface IProps {
  currentPage: keyof typeof Modes
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
  const [isErrorOnActiveButton, setErrorOnActiveButton] = useState(false)
  useEffect(() => {
    setRendered(true)
  }, [])
  useEffect(() => {
    setError(false)
    setErrorOnActiveButton(false)
  }, [trigger, diff, count, answeredCount])
  const equations = useMemo(() => Array.from(getEquations(currentPage, diff, count)), [diff, count, trigger])
  const handleSubmitButton = async () => {
    startProgressbar()
    if (count !== answeredCount) {
      window.scrollTo(0, 0)
      setErrorOnActiveButton(true)
      finishProgressbar()
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
    finishProgressbar()
  }

  const activeEquation = useSingleEquationStore(state => state.activeEquation)

  if (!hasRendered) return <div></div>
  return equations && equations[0][0] ? (
    <>
      <ErrorAuth isError={isError} setError={() => setError(false)} />
      <ErrorAllSubmit setError={() => setErrorOnActiveButton(false)} isError={isErrorOnActiveButton} />
      <div className={`${isError || isErrorOnActiveButton ? 'h-[100px] vsm:h-[125px]' : 'h-12'} w-full transition-all duration-1000`} />
      <EquationsWrapper>
        {equations.map((eq, i) => {
          const [equation, res] = eq
          return <Equation isActiveEquation={i === activeEquation} currentPage={currentPage} key={i} index={i} equation={equation} res={res} />
        })}
      </EquationsWrapper>
      <div className="pt-3">
        <SubmitButton handleClick={handleSubmitButton} />
      </div>
    </>
  ) : (
    <NoImplementation />
  )
}
export default Mode
