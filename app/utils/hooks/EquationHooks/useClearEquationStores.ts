import { useEquationStore } from '@/app/utils/store/equationStore'
import { useCallback, useEffect } from 'react'

export default function useClearEquationStores() {
  const [setEquationStore, setPage] = useEquationStore(state => [state.initializeAnswers, state.setPage])
  useEffect(() => {
    setEquationStore(0)
    setPage(0)
  }, [])
  return {
    clearStore: useCallback(() => {
      setEquationStore(0)
      setPage(0)
    }, []),
  }
}
