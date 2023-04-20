'use client'
import { PlayerModes } from '@/types/export'
import Link from 'next/link'
import { useGameParticipantsStore } from '@/app/utils/store/gameTypeStore'

interface IProps {
  url: string | false
  userId: string
  hasBot: boolean
}

const TextUrl = ({ url, userId, hasBot }: IProps) => {
  const setParticipants = useGameParticipantsStore(state => state.setParticipants)
  return (
    <LinkWrapper url={url}>
      <div
        onClick={() => setParticipants(hasBot ? [{ id: userId }, { id: 'bot' }] : [{ id: userId }])}
        className="text-indigo-500 hover:text-fuchsia-500 select-none p-5 w-full text-center transition-all duration-200">
        <span className="font-extrabold text-3xl usm:text-2xl cursor-pointer tracking-wider">Play</span>
      </div>
    </LinkWrapper>
  )
}

const LinkWrapper = ({ url, children }: { url: string | false; children: React.ReactNode }) => {
  return url ? <Link href={url}>{children}</Link> : <>{children}</>
}

export default TextUrl
