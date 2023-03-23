'use client'
import { useGameTypeStore } from '@/app/utils/store/gameTypeStore'
import Loader from '@/app/components/UI/Global/Loader'
import { useRouter } from 'next/navigation'

const Layout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter()
  const selectedGameType = useGameTypeStore(state => state.gameType)
  if (!selectedGameType) {
    router.push('/solve')
    return <Loader />
  }
  return <div>{children}</div>
}

export default Layout
