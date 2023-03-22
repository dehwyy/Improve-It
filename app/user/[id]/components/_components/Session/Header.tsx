import { PlayerModes } from '@/types/export'

interface IProps {
  day: number
  month: number
  year: number
  time: string
  playerMode: PlayerModes
  winner: SessionWinner
  userId: string
}
const Header = ({ day, month, year, time, playerMode, winner, userId }: IProps) => {
  return (
    <h2 className="text-2xl text-center select-text">
      {day}.{month}.{year} at {time} - {playerMode} {winner !== null && <WonAgainstBotText winner={winner} userId={userId} />}
    </h2>
  )
}

const WonAgainstBotText = ({ userId, winner }: { userId: string; winner: string }) => {
  const isSameIdAsPage = userId === winner
  return (
    <>
      - <span className={`${isSameIdAsPage ? 'text-green-500' : 'text-red-500'}`}>{isSameIdAsPage ? 'Won' : 'Lost'}</span>
    </>
  )
}

export default Header
