'use client'
import { useEffect, useLayoutEffect, useMemo, useState } from 'react'
import { getEquations } from '@/app/utils/tools/equations/EquationModule'
import { useEquationSettingsStore, useEquationStore } from '@/app/utils/store/equationStore'
import { shallow } from 'zustand/shallow'
import { useRouter } from 'next/navigation'
import SingleEquation from '@/app/solve/play/components/SingleEquation'
import { Difficulties, Modes } from '@/types/export'
import Redirect from '@/app/solve/play/components/components/Redirect'
import Loader from '@/app/components/UI/Global/Loader'
import MobileKeyboard from '@/app/solve/play/components/MobileKeyboard'
import { useInputStore } from '@/app/utils/store/inputStore'

const Page = () => {
  const router = useRouter()
  const [mode, difficulty, count] = useEquationSettingsStore(state => [state.mode, state.difficulty, state.count], shallow)
  const initAns = useEquationStore(state => state.initializeAnswers, shallow)
  const [currentPage, setPage] = useState(0)
  const [isAnimation, setAnimation] = useState(false)

  const equations = useMemo(() => Array.from(getEquations(mode as Modes, difficulty as Difficulties, count as number)), [])
  const currentEquation = useMemo(() => {
    return equations[currentPage]
  }, [currentPage, equations])

  useEffect(() => {
    count && initAns(count)
  }, [])
  useLayoutEffect(() => {
    if (currentPage === count) {
      router.push('/result')
    }
  }, [currentPage])

  if (window == undefined) return <></>
  if (!difficulty || !count || !mode || (mode == 'Variable' && (difficulty == 'Impossible' || difficulty == 'Hard'))) return <Redirect />
  return currentEquation || !count ? (
    <div className="pt-10 w-[80%] sm:w-[92%] vsm:w-full mx-auto text-center text-white">
      <SingleEquation
        setAnimation={setAnimation}
        isAnimation={isAnimation}
        setNextPage={() => setPage(p => p + 1)}
        idx={currentPage}
        correctAnswer={currentEquation[1]}
        equation={currentEquation[0]}
      />
      <MobileKeyboard isAnimation={isAnimation} />
    </div>
  ) : (
    <Loader />
  )
}

export default Page
