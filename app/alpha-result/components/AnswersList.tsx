'use client'
import { useAlphaEquationStore } from '@/app/utils/store/alpha-equationStore'
import { useRouter } from 'next/navigation'
import { useLayoutEffect } from 'react'

const AnswersList = () => {
  const router = useRouter()
  const answers = useAlphaEquationStore(state => state.answers)
  useLayoutEffect(() => {
    if (!answers) router.push('/testingSolve/plusminus')
  }, [])
  return (
    <>
      {answers &&
        answers.map((ans, i) => (
          <div key={i} className={`${ans.isTruthy ? 'bg-green-400' : 'bg-red-400'} text-2xl`}>
            {ans.timeMs / 1000}ms
          </div>
        ))}
    </>
  )
}

export default AnswersList
