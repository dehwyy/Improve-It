import { Difficulties, Modes } from '@/types/export'
import { useEquationSettingsStore, useEquationStore } from '@/app/utils/store/equationStore'
import { shallow } from 'zustand/shallow'
import { useEffect, useLayoutEffect, useMemo } from 'react'
import { getEquations } from '@/app/utils/tools/equations/EquationModule'
import { useRouter } from 'next/navigation'

export default function useEquationGenerator() {
  const router = useRouter()
  const [mode, difficulty, count] = useEquationSettingsStore(state => [state.mode, state.difficulty, state.count], shallow)
  const [initAns, page] = useEquationStore(state => [state.initializeAnswers, state.page], shallow)
  const equations = useMemo(() => Array.from(getEquations(mode as Modes, difficulty as Difficulties, count as number)), [])
  useEffect(() => {
    count && initAns(count)
  }, [])
  useLayoutEffect(() => {
    if (page === count) {
      router.push('/result')
    }
  }, [page])
  const { equation, correctAnswer } = useMemo(() => {
    if (!equations.length || (count && page >= count)) return {}
    const [equation, correctAnswer] = equations[page]
    return { equation, correctAnswer }
  }, [page, equations, count])
  const isInvalid = useMemo(() => {
    return !difficulty || !count || !mode || (mode == 'Variable' && (difficulty == 'Impossible' || difficulty == 'Hard'))
  }, [difficulty, count, mode])
  return {
    equation,
    correctAnswer,
    isInvalid: isInvalid,
  }
}
