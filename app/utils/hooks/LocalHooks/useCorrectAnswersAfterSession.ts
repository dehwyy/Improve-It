import { useMemo } from 'react'
import { useEquationStore } from '@/app/utils/store/equationStore'
import { useUserStore } from '@/app/utils/store/globalStore'

export default function useCorrectAnswersAfterSession() {
  const answers = useEquationStore(state => state.answers)
  const currentUserId = useUserStore(state => state.userId)
  return useMemo(() => {
    return answers?.reduce((p, current) => (current.userId == currentUserId ? p + 1 : p), 0)
  }, []) as number
}
