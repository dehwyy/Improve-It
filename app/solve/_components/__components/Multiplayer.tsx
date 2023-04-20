import { PlayerModes } from '@/types/export'
import Image from 'next/image'
import TextUrl from '@/app/solve/_components/__components/___components/TextUrl'
import ImagesWrapper from '@/app/solve/_components/__components/___components/ImagesWrapper'
import TextWrapper from '@/app/solve/_components/__components/___components/TextWrapper'
import InDevelopment from '@/app/components/UI/Global/InDevelopment'
import ModeTypeWrapper from '@/app/solve/_components/__components/___components/ModeTypeWrapper'

interface IProps {
  gameType: PlayerModes
  userId: string
}

const Multiplayer = ({ gameType, userId }: IProps) => {
  return (
    <ModeTypeWrapper mode={gameType}>
      <ImagesWrapper>
        <Image src="/images/man2.png" alt="multiplayer" width="200" height="200" className="rounded object-contain h-[200px]" />
      </ImagesWrapper>
      <TextWrapper name="Multiplayer" description="Compete against players..." />
      <TextUrl hasBot={false} url="/solve/multi" userId={userId} />
      <InDevelopment />
    </ModeTypeWrapper>
  )
}

export default Multiplayer
