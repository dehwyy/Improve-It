import { getBotTime } from '@/app/utils/tools/equations/bot/BotModule'
import { useEquationSettingsStore, useEquationStore } from '@/app/utils/store/equationStore'
import { shallow } from 'zustand/shallow'
import useTimeout from '@/app/utils/hooks/GlobalHooks/useTimeout'
import { useCallback, useMemo } from 'react'
import { useGameBotStore } from '@/app/utils/store/gameTypeStore'

export default function useBotTime() {
  const page = useEquationStore(state => state.page)
  const botDifficulty = useGameBotStore(state => state.difficulty)
  const [mode, difficulty, count] = useEquationSettingsStore(state => [state.mode, state.difficulty, state.count], shallow)
  const condition = mode && difficulty && count && botDifficulty
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const getTimeFn = useCallback(getBotTime(mode, difficulty, botDifficulty), [])
  const time = useMemo(() => {
    // getting random time
    const t = getTimeFn()
    return t * 1000
  }, [page, getTimeFn])
  const { isDone } = useTimeout({ time })
  return condition ? { isDone } : {}
}
