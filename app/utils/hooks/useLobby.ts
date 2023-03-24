import useBotTime from '@/app/utils/hooks/useBotTime'
import { useCallback, useEffect, useRef, useState } from 'react'
import { useEquationSettingsStore, useEquationStore } from '@/app/utils/store/equationStore'
import { useGameTypeStore } from '@/app/utils/store/gameTypeStore'
import { useStep } from 'usehooks-ts'
import useTimeout from '@/app/utils/hooks/useTimeout'

type Submit = ({ isTruthy }: { isTruthy: boolean }) => void

export default function useLobby(submitEquation: Submit) {
  const selectedGameType = useGameTypeStore(state => state.gameType)
  const [difficulty, count, mode] = useEquationSettingsStore(state => [state.difficulty, state.count, state.mode])
  const answers = useEquationStore(state => state.answers)
  if (!mode || !difficulty || !count || !answers) return

  const [step, { goToNextStep }] = useStep(count)
  const botTimes = useBotTime(mode, difficulty, count)
  const { isDone, cancel } = useTimeout({ callback: () => {}, time: botTimes[step - 1] })
  const submitResult = useCallback(() => {
    if (!answers[step - 1] && isDone) {
      submitEquation({ isTruthy: false })
      goToNextStep()
    } else if (answers[step - 1] && !isDone) {
      cancel()
      goToNextStep()
    }
  }, [JSON.stringify(answers)])

  useEffect(() => {
    if (selectedGameType == 'With Bot') {
      submitResult()
    }
  }, [step, JSON.stringify(answers)])
}
