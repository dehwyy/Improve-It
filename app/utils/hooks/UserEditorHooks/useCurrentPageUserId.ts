import { usePathname } from 'next/navigation'
import { useMemo } from 'react'

export default function useCurrentPageUserIdOnEditPage() {
  const path = usePathname()
  return useMemo(() => {
    return path?.split('/').slice(-2)[0]
  }, [path])
}
