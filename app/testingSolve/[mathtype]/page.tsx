'use client'
import type { FC } from 'react'
import { useEffect, useLayoutEffect, useMemo, useState } from 'react'
import { Diffs, Modes } from '@/types/export'
import getEquations from '@/app/utils/tools/equations/EquationModule'
import { useAlphaEquationStore } from '@/app/utils/store/alpha-equationStore'
import { shallow } from 'zustand/shallow'
import { useRouter } from 'next/navigation'
import { CircularProgress } from '@mui/material'
import SingleEquation from '@/app/testingSolve/[mathtype]/components/SingleEquation'

interface IProps {
  params: {
    mathtype: keyof typeof Modes
  }
}

const Page: FC<IProps> = ({ params }) => {
  const router = useRouter()
  const initAns = useAlphaEquationStore(state => state.initializeAnswers, shallow)
  const [currentPage, setPage] = useState(0)

  const equations = useMemo(() => Array.from(getEquations(params.mathtype, Diffs.Easy, 5)), [])
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
