import { useUserEditorStore } from '@/app/utils/store/editUserInfoStore'
import { Admin } from '@/types/export'
import { useUserStore } from '@/app/utils/store/globalStore'
import useCurrentPageUserId from '@/app/utils/hooks/UserEditorHooks/useCurrentPageUserId'
import { useEffect } from 'react'

export default function useSetIsEditAble() {
  useEffect(() => {
    setAccessToEdit(pageUserId === sessionUserId || sessionUserId === Admin.id)
  })
  const pageUserId = useCurrentPageUserId()
  const sessionUserId = useUserStore(state => state.userId)
  const setAccessToEdit = useUserEditorStore(state => state.setAccessToEdit)
}
