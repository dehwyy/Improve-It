import SettingItem from '@/app/solve/edit/_components/__components/SettingItem'
import Link from 'next/link'
import { useGameTypeStore } from '@/app/utils/store/gameTypeStore'
import { shallow } from 'zustand/shallow'
import { PlayerModes } from '@/types/export'
import ImagesWrapper from '@/app/solve/_components/__components/___components/ImagesWrapper'
import Image from 'next/image'
import TextUrl from '@/app/solve/_components/__components/___components/TextUrl'
import StyleWrapper from '@/app/components/UI/Wrappers/StyleWrapper'
import TextWrapper from '@/app/solve/_components/__components/___components/TextWrapper'

interface IProps {
  gameType: PlayerModes
}

const Multiplayer = ({ gameType }: IProps) => {
  const setGameType = useGameTypeStore(state => state.setGameType)
  return (
    <div onClick={() => setGameType(gameType)} className="w-full flex flex-col items-center">
      <ImagesWrapper>
        <Image src="/images/giga.png" alt="blueface" width="200" height="200" className="rounded" />
      </ImagesWrapper>
      <TextWrapper>
        <p className="text-3xl text-center">1 VS 1 against bot (It is as strong as chess bot)</p>
        <p className="opacity-70 text-center mt-3">Want to compete against 200+iq players. Here it is. Bot with 300iq. Try to bit it!</p>
      </TextWrapper>
      <TextUrl gameType={gameType} />
    </div>
  )
}

export default Multiplayer
