import { usePathname } from 'next/navigation'
import { useMemo } from 'react'

export default function useCurrentPageUserId() {
  const path = usePathname()
  const currentUserId = useMemo(() => {
    return path?.split('/').at(-1)
  }, [path])
  return currentUserId
}
