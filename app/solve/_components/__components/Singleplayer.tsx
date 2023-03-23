import { useGameTypeStore } from '@/app/utils/store/gameTypeStore'
import { PlayerModes } from '@/types/export'
import ImagesWrapper from '@/app/solve/_components/__components/___components/ImagesWrapper'
import Image from 'next/image'
import TextUrl from '@/app/solve/_components/__components/___components/TextUrl'
import TextWrapper from '@/app/solve/_components/__components/___components/TextWrapper'
import ModeTypeWrapper from '@/app/solve/_components/__components/___components/ModeTypeWrapper'

interface IProps {
  gameType: PlayerModes
}

const Singleplayer = ({ gameType }: IProps) => {
  return (
    <ModeTypeWrapper mode={gameType}>
      <ImagesWrapper>
        <Image src="/images/blue.jpg" alt="blueface" width="200" height="200" className="rounded" />
      </ImagesWrapper>
      <TextWrapper>
        <p className="text-3xl text-center">Solo practice mode.</p>
        <p className="opacity-70 text-center mt-3">Want to improve your mental calculation? Become stronger at math? This mode is for you.</p>
      </TextWrapper>
      <TextUrl gameType={gameType} />
    </ModeTypeWrapper>
  )
}

export default Singleplayer
