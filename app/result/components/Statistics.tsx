'use client'
import AnswersList from '@/app/result/components/_components/AnswersList'
import ProgressBar from '@/app/components/UI/Global/Stats/ProgressBar'
import { useLayoutEffect } from 'react'
import { useEquationStore } from '@/app/utils/store/equationStore'
import OverallTime from '@/app/result/components/_components/OverallTime'
import AverageTimePerAnswer from '@/app/result/components/_components/AverageTimePerAnswer'
import { useRouter } from 'next/navigation'
import StyledWrapper from '@/app/components/UI/Wrappers/StyleWrapper'
import Loader from '@/app/components/UI/Global/Loader'
import useSubmitLobby from '@/app/utils/hooks/useSubmitLobby'
import useCorrectAnswersAfterSession from '@/app/utils/hooks/useCorrectAnswersAfterSession'

const Statistics = () => {
  const router = useRouter()
  const answers = useEquationStore(state => state.answers)
  const correctAnswersCount = useCorrectAnswersAfterSession()
  const { submitScore } = useSubmitLobby()
  useLayoutEffect(() => {
    submitScore().then(() => {})
  }, [])
  if (!answers) router.push('/solve')

  return answers ? (
    <StyledWrapper className="usm:px-0 my-12 shadow-lg shadow-blue-500/100 text-blue-500 border-current">
      <h2 className="text-5xl font-extrabold">Statistics</h2>
      <div className="grid grid-cols-3 lg:grid-row-2 lg:grid-cols-2 usm:grid-cols-1 sm:grid-cols-[40fr_23fr] gap-5 p-5 w-full pb-10 cursor-default">
        <AnswersList />
        <OverallTime />
        <AverageTimePerAnswer />
      </div>
      <ProgressBar count={answers?.length as number} correctCount={correctAnswersCount} />
    </StyledWrapper>
  ) : (
    <Loader />
  )
}

export default Statistics
