'use client'
import { useGameTypeStore } from '@/app/utils/store/gameTypeStore'
import { PlayerModes } from '@/types/export'

interface IProps {
  children: React.ReactNode
  mode: PlayerModes
}
const ModeTypeWrapper = ({ children, mode }: IProps) => {
  const setGameType = useGameTypeStore(state => state.setGameType)
  return (
    <div onClick={() => setGameType(mode)} className="relative w-full flex flex-col items-center">
      {children}
    </div>
  )
}

export default ModeTypeWrapper
