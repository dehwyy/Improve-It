import { useGameTypeStore } from '@/app/utils/store/gameTypeStore'
import { PlayerModes } from '@/types/export'
import ImagesWrapper from '@/app/solve/_components/__components/___components/ImagesWrapper'
import Image from 'next/image'
import TextUrl from '@/app/solve/_components/__components/___components/TextUrl'
import TextWrapper from '@/app/solve/_components/__components/___components/TextWrapper'
import ModeTypeWrapper from '@/app/solve/_components/__components/___components/ModeTypeWrapper'

interface IProps {
  gameType: PlayerModes
  userId: string
}

const Singleplayer = ({ gameType, userId }: IProps) => {
  return (
    <ModeTypeWrapper mode={gameType}>
      <ImagesWrapper>
        <Image priority={true} src="/images/man.png" alt="singlePlayer" width="200" height="200" className="rounded object-contain h-[200px]" />
      </ImagesWrapper>
      <TextWrapper name={'SOLO'} description={`Unlimited time. Various difficulties, modes. Allow to skip equalities by pressing "Enter"`} />
      <TextUrl userId={userId} hasBot={false} url="/solve/edit" />
    </ModeTypeWrapper>
  )
}

export default Singleplayer
