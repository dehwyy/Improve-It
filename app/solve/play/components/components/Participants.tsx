import Loader from '@/app/components/UI/Global/Loader'
import Participant from '@/app/solve/play/components/components/__components/Participant'

interface IProps {
  participants: { id: string | 'bot' }[]
}

const Participants = ({ participants }: IProps) => {
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
