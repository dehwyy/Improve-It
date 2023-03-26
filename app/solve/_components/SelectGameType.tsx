import { PlayerModes } from '@/types/export'
import Multiplayer from '@/app/solve/_components/__components/Multiplayer'
import Singleplayer from '@/app/solve/_components/__components/Singleplayer'
import PlayWithBot from '@/app/solve/_components/__components/PlayWithBot'
import CustomDivider from '@/app/solve/_components/__components/___components/CustomDivider'

const SelectGameType = ({ userId }: { userId: string }) => {
  return (
    <>
      <h2 className="text-center text-5xl text-white font-extrabold pb-7">Select Game Type</h2>
      <div className="flex-col flex gap-12 w-7/12 mx-auto sm:w-full ">
        <Singleplayer gameType={PlayerModes.Solo} />
        <CustomDivider />
        <PlayWithBot gameType={PlayerModes.WithBot} userId={userId} />
        <CustomDivider />
        <Multiplayer gameType={PlayerModes.Multiplayer} userId={userId} />
      </div>
    </>
  )
}

export default SelectGameType
