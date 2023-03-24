import { PlayerModes } from '@/types/export'
import Link from 'next/link'

interface IProps {
  gameType: PlayerModes
  url: string
  onClick?: () => void
}

const TextUrl = ({ gameType, url, onClick }: IProps) => {
  return (
    <Link href={url} onClick={onClick} className="hover:text-red-500 text-blue-500 select-none p-5 w-full text-center transition-all duration-200">
      <span className="font-extrabold text-3xl usm:text-2xl">Go {gameType}</span>
    </Link>
  )
}

export default TextUrl
