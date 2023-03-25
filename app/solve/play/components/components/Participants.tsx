import Loader from '@/app/components/UI/Global/Loader'
import Participant from '@/app/solve/play/components/components/__components/Participant'
import { useGameParticipantsStore } from '@/app/utils/store/gameTypeStore'

const Participants = () => {
  const participants = useGameParticipantsStore(state => state.participants)
  return participants ? (
    <div className="mt-[-2.5rem] mb-[2.5rem] flex flex-col gap-y-2">
      {participants.map(player => (
        <Participant player={player} />
      ))}
    </div>
  ) : (
    <Loader />
  )
}

export default Participants
