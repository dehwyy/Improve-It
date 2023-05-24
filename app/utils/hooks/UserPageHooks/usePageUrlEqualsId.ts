import { usePathname } from 'next/navigation'
import { useUserStore } from '@/app/utils/store/globalStore'

export default function usePageUrlEqualsId() {
  const userId = useUserStore(state => state.userId)
  const currentUrl = usePathname()
  const userPageId = currentUrl?.split('/').slice(-1).join('')
  return userPageId === userId
}
