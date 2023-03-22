import { useGameTypeStore } from '@/app/utils/store/gameTypeStore'
import { shallow } from 'zustand/shallow'
import { PlayerModes } from '@/types/export'
import ImagesWrapper from '@/app/solve/_components/__components/___components/ImagesWrapper'
import Image from 'next/image'
import TextUrl from '@/app/solve/_components/__components/___components/TextUrl'
import TextWrapper from '@/app/solve/_components/__components/___components/TextWrapper'

interface IProps {
  gameType: PlayerModes
}

const Multiplayer = ({ gameType }: IProps) => {
  const setGameType = useGameTypeStore(state => state.setGameType)
  return (
    <div onClick={() => setGameType(gameType)} className="w-full flex flex-col items-center">
      <ImagesWrapper>
        <Image src="/images/blue.jpg" alt="blueface" width="200" height="200" className="rounded" />
      </ImagesWrapper>
      <TextWrapper>
        <p className="text-3xl text-center">Solo practice mode.</p>
        <p className="opacity-70 text-center mt-3">Want to improve your mental calculation? Become stronger at math? This mode is for you.</p>
      </TextWrapper>
      <TextUrl gameType={gameType} />
    </div>
  )
}

export default Multiplayer
