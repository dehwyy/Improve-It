'use client'
import { PlayerModes } from '@/types/export'
import Link from 'next/link'
import { useGameParticipantsStore } from '@/app/utils/store/gameTypeStore'

interface IProps {
  gameType: PlayerModes
  url: string | false
  userId?: string
}

const TextUrl = ({ gameType, url, userId }: IProps) => {
  const setParticipants = useGameParticipantsStore(state => state.setParticipants)
  return (
    <LinkWrapper url={url}>
      <div
        onClick={() => userId && setParticipants([{ id: 'bot' }, { id: userId }])}
        className="hover:text-red-500 text-blue-500 select-none p-5 w-full text-center transition-all duration-200">
        <span className="font-extrabold text-3xl usm:text-2xl cursor-pointer">Go {gameType}</span>
      </div>
    </LinkWrapper>
  )
}

const LinkWrapper = ({ url, children }: { url: string | false; children: React.ReactNode }) => {
  return url ? <Link href={url}>{children}</Link> : <>{children}</>
}

export default TextUrl
