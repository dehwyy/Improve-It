import React, { useMemo } from 'react'
import { useAlphaEquationStore } from '@/app/utils/store/alpha-equationStore'

const AverageTimePerAnswer = () => {
  const answers = useAlphaEquationStore(state => state.answers)
  const overallTime = useMemo(() => {
    return answers?.reduce((p, current) => p + current.timeMs, 0)
  }, []) as number
  return (
    <div className="text-2xl text-blue-500 text-center vsm:mt-[-0.75rem] lg:mt-[1.5rem] sm:mt-[1.5rem]">
      <h3 className="font-bold">Average time</h3>
      <div className="border-yellow-500 mx-auto mt-[1rem] border-2 rounded-md py-3 text-center">
        {(overallTime / answers!.length / 1000).toFixed(3)}s
      </div>
    </div>
  )
}

export default AverageTimePerAnswer
