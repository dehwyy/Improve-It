import { PlayerModes } from '@/types/export'
import ImagesWrapper from '@/app/solve/_components/__components/___components/ImagesWrapper'
import Image from 'next/image'
import TextUrl from '@/app/solve/_components/__components/___components/TextUrl'
import TextWrapper from '@/app/solve/_components/__components/___components/TextWrapper'
import ModeTypeWrapper from '@/app/solve/_components/__components/___components/ModeTypeWrapper'
import ErrorMustSignIn from '@/app/components/UI/Global/Errors/ErrorMustSignIn'
interface IProps {
  gameType: PlayerModes
  userId: string
}

const PlayWithBot = ({ gameType, userId }: IProps) => {
  return (
    <ModeTypeWrapper mode={gameType}>
      <ImagesWrapper>
        <Image priority={true} src="/images/robo.png" alt="againstBot" width="200" height="200" className="rounded object-contain h-[200px]" />
      </ImagesWrapper>
      <TextWrapper name="Against BOT" description="Compete who's faster: You or Bot." />
      <ErrorMustSignIn userId={userId}>
        <TextUrl hasBot={true} url={userId && '/solve/bot'} userId={userId} />
      </ErrorMustSignIn>
    </ModeTypeWrapper>
  )
}

export default PlayWithBot
