import { PlayerModes } from '@/types/export'
import Image from 'next/image'
import TextUrl from '@/app/solve/_components/__components/___components/TextUrl'
import ImagesWrapper from '@/app/solve/_components/__components/___components/ImagesWrapper'
import TextWrapper from '@/app/solve/_components/__components/___components/TextWrapper'
import InDevelopment from '@/app/components/UI/Global/InDevelopment'
import ModeTypeWrapper from '@/app/solve/_components/__components/___components/ModeTypeWrapper'

interface IProps {
  gameType: PlayerModes
  onClick: () => void
}

const Multiplayer = ({ gameType }: IProps) => {
  return (
    <ModeTypeWrapper mode={gameType}>
      <ImagesWrapper>
        <Image src="/images/chad.png" alt="blueface" width="200" height="200" className="rounded" />
      </ImagesWrapper>
      <TextWrapper>
        <p className="text-3xl text-center">Multiplayer for 2+ player. The fastest player wins.</p>
        <p className="opacity-70 text-center mt-3">Wanna chill with friends or prove your superiority? This mode was made to these</p>
      </TextWrapper>
      <TextUrl gameType={gameType} url="/solve/multi" onClick={() => {}} />
      <InDevelopment />
    </ModeTypeWrapper>
  )
}

export default Multiplayer
