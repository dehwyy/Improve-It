import React, { useMemo } from 'react'
import { useAlphaEquationStore } from '@/app/utils/store/alpha-equationStore'

const OverallTime = () => {
  const answers = useAlphaEquationStore(state => state.answers)
  const overallTime = useMemo(() => {
    return answers?.reduce((p, current) => p + current.timeMs, 0)
  }, []) as number
  return (
    <div className="text-2xl text-blue-500 text-center w-1/3">
      <h3 className="font-bold">Overall time</h3>
      <div className="border-yellow-500 mx-auto mt-5 border-2 rounded-md py-3 text-center">{overallTime / 1000}s</div>
    </div>
  )
}

export default OverallTime
