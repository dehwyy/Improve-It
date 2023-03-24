import { PlayerModes } from '@/types/export'
import ImagesWrapper from '@/app/solve/_components/__components/___components/ImagesWrapper'
import Image from 'next/image'
import TextUrl from '@/app/solve/_components/__components/___components/TextUrl'
import TextWrapper from '@/app/solve/_components/__components/___components/TextWrapper'
import ModeTypeWrapper from '@/app/solve/_components/__components/___components/ModeTypeWrapper'
import InDevelopment from '@/app/components/UI/Global/InDevelopment'
import { useGameParticipantsStore } from '@/app/utils/store/gameTypeStore'

interface IProps {
  gameType: PlayerModes
  userId: string
}

const PlayWithBot = ({ gameType, userId }: IProps) => {
  return (
    <ModeTypeWrapper mode={gameType}>
      <ImagesWrapper>
        <Image src="/images/giga.png" alt="blueface" width="200" height="200" className="rounded" />
      </ImagesWrapper>
      <TextWrapper>
        <p className="text-3xl text-center">1 VS 1 against bot (It is as strong as chess bot)</p>
        <p className="opacity-70 text-center mt-3">Want to compete against 200+iq players. Here it is. Bot with 300iq. Try to bit it!</p>
      </TextWrapper>
      <TextUrl gameType={gameType} url="/solve/bot" userId={userId} />
    </ModeTypeWrapper>
  )
}

export default PlayWithBot
