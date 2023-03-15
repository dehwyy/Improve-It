import AnswersList from '@/app/alpha-result/components/_components/AnswersList'
import ProgressBar from '@/app/components/UI/Global/Stats/ProgressBar'
import { useMemo } from 'react'
import { useAlphaEquationStore } from '@/app/utils/store/alpha-equationStore'
import OverallTime from '@/app/alpha-result/components/_components/OverallTime'
import AverageTimePerAnswer from '@/app/alpha-result/components/_components/AverageTimePerAnswer'
import { useRouter } from 'next/navigation'

const Statistics = () => {
  const router = useRouter()
  const answers = useAlphaEquationStore(state => state.answers)
  const correctAnswersCount = useMemo(() => {
    return answers?.reduce((p, current) => (current.isTruthy ? p + 1 : p), 0)
  }, []) as number
  if (!answers) {
    router.push('/alpha-solve')
  }
  return (
    <>
      <h2 className="text-5xl font-extrabold">Statistics</h2>
      <div className="grid grid-cols-3 lg:grid-row-2 lg:grid-cols-2 sm:grid-cols-[40fr_23fr] gap-5 p-5 w-full pb-10">
        <AnswersList />
        <OverallTime />
        <AverageTimePerAnswer />
      </div>
      <ProgressBar count={answers?.length as number} correctCount={correctAnswersCount} />
    </>
  )
}

export default Statistics
