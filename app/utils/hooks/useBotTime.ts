import { BotDifficulties, Difficulties, Modes } from '@/types/export'
import { getBotTime } from '@/app/utils/tools/equations/bot/BotModule'
import { useEquationSettingsStore, useEquationStore } from '@/app/utils/store/equationStore'
import { shallow } from 'zustand/shallow'
import useTimeout from '@/app/utils/hooks/useTimeout'
import { useCallback, useEffect, useMemo } from 'react'
import { useGameBotStore } from '@/app/utils/store/gameTypeStore'

export default function useBotTime() {
  const page = useEquationStore(state => state.page)
  const botDifficulty = useGameBotStore(state => state.difficulty)
  const [mode, difficulty, count] = useEquationSettingsStore(state => [state.mode, state.difficulty, state.count], shallow)
  if (!mode || !difficulty || !count || !botDifficulty) return {}
  const getTime = useCallback(getBotTime(mode, difficulty, botDifficulty), [])
  const time = useMemo(() => {
    const t = getTime()
    return t * 1000
  }, [page])
  const { isDone } = useTimeout({ time })
  return {
    isDone,
  }
}
