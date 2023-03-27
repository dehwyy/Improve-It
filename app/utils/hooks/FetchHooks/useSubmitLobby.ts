import { useCallback } from 'react'
import { done as finishProgressbar, start as startProgressbar } from 'nprogress'
import useSWRMutation from 'swr/mutation'
import { ApiRoutes } from '@/types/routes'
import { useEquationSettingsStore, useEquationStore } from '@/app/utils/store/equationStore'
import { useGameParticipantsStore, useGameTypeStore } from '@/app/utils/store/gameTypeStore'
import { useUserStore } from '@/app/utils/store/globalStore'
import postFetcher from '@/app/utils/global/postFetcher'

export default function useSubmitLobby() {
  const currentUserId = useUserStore(state => state.userId)
  const answers = useEquationStore(state => state.answers)
  const players = useGameParticipantsStore(state => state.participants)
  const playerMode = useGameTypeStore(state => state.gameType)
  const [mode, difficulty, count] = useEquationSettingsStore(state => [state.mode, state.difficulty, state.count])
  const { trigger: triggerCreateLobby } = useSWRMutation(ApiRoutes.submitSession, postFetcher)
  const { trigger: triggerUpdateUserCount } = useSWRMutation(ApiRoutes.updateUserCount, postFetcher)
  const submitLobby = useCallback(async () => {
    startProgressbar()
    await Promise.all([
      triggerUpdateUserCount({ answeredCount: count, userId: currentUserId }),
      currentUserId == players![0].id && triggerCreateLobby({ difficulty, mode, count, answers, playerMode, players }),
    ])
    finishProgressbar()
  }, [JSON.stringify(answers)])
  return {
    submitScore: () => submitLobby(),
  }
}
