'use client'
import { PlayerModes } from '@/types/export'
import Multiplayer from '@/app/solve/_components/__components/Multiplayer'
import Singleplayer from '@/app/solve/_components/__components/Singleplayer'
import PlayWithBot from '@/app/solve/_components/__components/PlayWithBot'
import CustomDivider from '@/app/solve/_components/__components/___components/CustomDivider'
import { useGameParticipantsStore } from '@/app/utils/store/gameTypeStore'
import { useSession } from 'next-auth/react'
import Loader from '@/app/components/UI/Global/Loader'
import ErrorSignIn from '@/app/components/UI/Global/Errors/ErrorSignIn'

const SelectGameType = ({ userId }: { userId: string }) => {
  const { status } = useSession()
  const setParticipants = useGameParticipantsStore(state => state.setParticipants)
  if (status == 'loading') return <Loader />
  if (status == 'unauthenticated') return <ErrorSignIn reason="You cannot use this feature while unauthenticated" />
  return (
    <>
      <h2 className="text-center text-5xl text-white font-extrabold pb-7">Select Game Type</h2>
      <div className="flex-col flex gap-12 w-7/12 mx-auto sm:w-full ">
        <Singleplayer gameType={PlayerModes.Solo} />
        <CustomDivider />
        <PlayWithBot gameType={PlayerModes.Withbot} onClick={() => setParticipants([{ id: 'bot' }, { id: userId }])} />
        <CustomDivider />
        <Multiplayer gameType={PlayerModes.Multiplayer} />
      </div>
    </>
  )
}

export default SelectGameType
