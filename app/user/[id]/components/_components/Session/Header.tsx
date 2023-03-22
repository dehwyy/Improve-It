interface IProps {
  day: number
  month: number
  year: number
  time: string
  isSinglePlayer: boolean
}
const Header = ({ day, month, year, time, isSinglePlayer }: IProps) => {
  return (
    <h2 className="text-2xl text-center select-text">
      {day}.{month}.{year} at {time} - {isSinglePlayer ? 'Singleplayer' : 'Multiplayer'}
    </h2>
  )
}

export default Header
