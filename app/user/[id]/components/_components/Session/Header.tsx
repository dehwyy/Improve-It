interface IProps {
  time: Date
  playerMode: string
  winner: SessionWinner
  userId: string
}
const Header = ({ time, playerMode, winner, userId }: IProps) => {
  return (
    <h2 className="text-2xl text-center select-text">
      <>
        {time.toLocaleDateString()} at {time.toLocaleTimeString()}- {playerMode} {<WonAgainstBotText winner={winner} userId={userId} />}
      </>
    </h2>
  )
}

const WonAgainstBotText = ({ userId, winner }: { userId: string; winner: string | null }) => {
  const isSameIdAsPage = userId === winner
  return (
    <>
      - <span className={`${isSameIdAsPage ? 'text-green-500' : 'text-red-500'}`}>{isSameIdAsPage ? 'Won' : 'Lost'}</span>
    </>
  )
}

export default Header
