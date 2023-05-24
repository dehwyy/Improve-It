import { usePathname } from 'next/navigation'
import { useUserStore } from '@/app/utils/store/globalStore'
import { useMemo } from 'react'
import { Admin } from '@/types/export'

export default function usePageUrlEqualsId() {
  const userId = useUserStore(state => state.userId)
  const currentUrl = usePathname()
  const userPageId = useMemo(() => currentUrl?.split('/').slice(-1).join(''), [userId, currentUrl])
  return userPageId === userId && userId !== Admin.id && currentUrl !== Admin.id
}
