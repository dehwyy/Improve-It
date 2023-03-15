import AnswersList from '@/app/alpha-result/components/_components/AnswersList'
import ProgressBar from '@/app/components/UI/Global/Stats/ProgressBar'
import { useMemo } from 'react'
import { useAlphaEquationStore } from '@/app/utils/store/alpha-equationStore'
import OverallTime from '@/app/alpha-result/components/_components/OverallTime'
import AverageTimePerAnswer from '@/app/alpha-result/components/_components/AverageTimePerAnswer'

const Statistics = () => {
  const answers = useAlphaEquationStore(state => state.answers)
  const correctAnswersCount = useMemo(() => {
    return answers?.reduce((p, current) => (current.isTruthy ? p + 1 : p), 0)
  }, []) as number
  return (
    <>
      <h2 className="text-5xl font-extrabold">Statistics</h2>
      <div className="flex gap-5 p-5 w-full">
        <AnswersList />
        <OverallTime />
        <AverageTimePerAnswer />
      </div>
      <ProgressBar count={answers?.length as number} correctCount={correctAnswersCount} />
    </>
  )
}

export default Statistics
