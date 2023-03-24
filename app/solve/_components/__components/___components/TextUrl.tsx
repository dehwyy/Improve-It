'use client'
import { PlayerModes } from '@/types/export'
import Link from 'next/link'
import { useGameParticipantsStore } from '@/app/utils/store/gameTypeStore'

interface IProps {
  gameType: PlayerModes
  url: string
  userId?: string
}

const TextUrl = ({ gameType, url, userId }: IProps) => {
  const setParticipants = useGameParticipantsStore(state => state.setParticipants)
  return (
    <Link
      href={url}
      onClick={() => userId && setParticipants([{ id: 'bot' }, { id: userId }])}
      className="hover:text-red-500 text-blue-500 select-none p-5 w-full text-center transition-all duration-200">
      <span className="font-extrabold text-3xl usm:text-2xl">Go {gameType}</span>
    </Link>
  )
}

export default TextUrl
