'use client'
import AnswersList from '@/app/result/components/_components/AnswersList'
import ProgressBar from '@/app/components/UI/Global/Stats/ProgressBar'
import { useCallback, useLayoutEffect, useMemo } from 'react'
import { useEquationSettingsStore, useEquationStore } from '@/app/utils/store/equationStore'
import OverallTime from '@/app/result/components/_components/OverallTime'
import AverageTimePerAnswer from '@/app/result/components/_components/AverageTimePerAnswer'
import { useRouter } from 'next/navigation'
import { start as startProgressbar, done as finishProgressbar } from 'nprogress'
import StyledWrapper from '@/app/components/UI/Wrappers/StyleWrapper'
import Loader from '@/app/components/UI/Global/Loader'
import { ApiRoutes } from '@/types/routes'
import useClearEquationStores from '@/app/utils/hooks/useClearEquationStores'
import { useUserStore } from '@/app/utils/store/globalStore'
import { useGameParticipantsStore, useGameTypeStore } from '@/app/utils/store/gameTypeStore'

const Statistics = () => {
  const router = useRouter()
  const currentUserId = useUserStore(state => state.userId)
  const answers = useEquationStore(state => state.answers)
  const players = useGameParticipantsStore(state => state.participants)
  const playerMode = useGameTypeStore(state => state.gameType)
  const [mode, difficulty, count] = useEquationSettingsStore(state => [state.mode, state.difficulty, state.count])
  useLayoutEffect(() => {
    answers && submitResultHandler()
  }, [])
  const correctAnswersCount = useMemo(() => {
    return answers?.reduce((p, current) => (current.userId == currentUserId ? p + 1 : p), 0)
  }, []) as number
  const submitResultHandler = useCallback(async () => {
    startProgressbar()
    const response = await fetch(ApiRoutes.updateUserCount, {
      method: 'POST',
      body: JSON.stringify({
        answeredCount: answers!.length,
        correctlyAnsweredCount: correctAnswersCount,
      }),
    })
    const newResponse = await fetch(ApiRoutes.submitSession, {
      method: 'Post',
      body: JSON.stringify({
        difficulty,
        mode,
        count,
        answers,
        playerMode,
        players,
      }),
    })
    console.log(newResponse)
    finishProgressbar()
    if (!response.ok) {
      return 'ERROR'
    } else {
      return 'OK'
    }
  }, [answers, correctAnswersCount])
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
