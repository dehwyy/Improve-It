import Link from 'next/link'
import { useGameTypeStore } from '@/app/utils/store/gameTypeStore'
import { PlayerModes } from '@/types/export'
import Image from 'next/image'
import TextUrl from '@/app/solve/_components/__components/___components/TextUrl'
import ImagesWrapper from '@/app/solve/_components/__components/___components/ImagesWrapper'
import TextWrapper from '@/app/solve/_components/__components/___components/TextWrapper'

interface IProps {
  gameType: PlayerModes
}

const Multiplayer = ({ gameType }: IProps) => {
  const setGameType = useGameTypeStore(state => state.setGameType)
  return (
    <div onClick={() => setGameType(gameType)} className="w-full flex flex-col items-center">
      <ImagesWrapper>
        <Image src="/images/chad.png" alt="blueface" width="200" height="200" className="rounded" />
      </ImagesWrapper>
      <TextWrapper>
        <p className="text-3xl text-center">Multiplayer for 2+ player. The fastest player wins.</p>
        <p className="opacity-70 text-center mt-3">Wanna chill with friends or prove your superiority? This mode was made to these</p>
      </TextWrapper>
      <TextUrl gameType={gameType} />
    </div>
  )
}

export default Multiplayer
