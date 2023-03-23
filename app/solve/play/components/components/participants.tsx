import { useGameParticipantsStore } from '@/app/utils/store/gameTypeStore'
import Loader from '@/app/components/UI/Global/Loader'

const Participants = () => {
  const participants = useGameParticipantsStore(state => state.participants)
  return participants ? (
    <div>
      {participants.map(player => (
        <div>{player.id}</div>
      ))}
    </div>
  ) : (
    <Loader />
  )
}

export default Participants
