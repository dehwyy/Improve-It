import React, { useMemo } from 'react'
import { useEquationStore } from '@/app/utils/store/equationStore'

const OverallTime = () => {
  const answers = useEquationStore(state => state.answers)
  const overallTime = useMemo(() => {
    return answers?.reduce((p, current) => p + current.timeMs, 0)
  }, []) as number
  return (
    <div className="text-2xl text-blue-500 text-center">
      <h3 className="font-bold">Overall time</h3>
      <div className="border-yellow-500 mx-auto mt-5 border-2 rounded-md py-3 text-center">{(overallTime / 1000).toFixed(2)}s</div>
    </div>
  )
}

export default OverallTime
