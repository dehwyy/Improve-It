import { useMemo } from 'react'
import { useUserEditorStore } from '@/app/utils/store/editUserInfoStore'

export default function useIsSummaryValidFields() {
  const isValidFields = useUserEditorStore(state => state.isValidFields)
  const isSummaryValid = useMemo(() => {
    return !~Object.values(isValidFields).findIndex(item => item == false)
  }, [JSON.stringify(isValidFields)])
  return isSummaryValid
}
