'use client'
import { useEffect, useLayoutEffect, useMemo, useState } from 'react'
import getEquations from '@/app/utils/tools/equations/EquationModule'
import { useAlphaEquationStore } from '@/app/utils/store/alpha-equationStore'
import { shallow } from 'zustand/shallow'
import { useRouter } from 'next/navigation'
import { CircularProgress } from '@mui/material'
import SingleEquation from '@/app/alpha-solve/play/components/SingleEquation'
import { useEquationStore } from '@/app/utils/store/equationStore'

const Page = () => {
  const router = useRouter()
  const initAns = useAlphaEquationStore(state => state.initializeAnswers, shallow)
  const [currentPage, setPage] = useState(0)
  const [difficulty, count] = useEquationStore(state => [state.diff, state.count], shallow)
  const equations = useMemo(() => Array.from(getEquations('plusminus', difficulty, 5 || count)), [])
  const currentEquation = useMemo(() => {
    return equations[currentPage]
  }, [currentPage])

  useEffect(() => initAns(5), [])
  useLayoutEffect(() => {
    if (currentPage === 5) {
      router.push('/alpha-result')
    }
  }, [currentPage])

  if (window == undefined) return <></>
  return currentEquation ? (
    <div className="pt-10 w-[80%] sm:w-[92%] vsm:w-full mx-auto text-center text-white">
      <SingleEquation setNextPage={() => setPage(p => p + 1)} idx={currentPage} correctAnswer={currentEquation[1]} answer={currentEquation[0]} />
    </div>
  ) : (
    <div className="flex justify-center items-center pt-36">
      <div>
        <CircularProgress color="success" style={{ height: '100px', width: '100px' }} />
      </div>
    </div>
  )
}

export default Page
