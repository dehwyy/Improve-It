import { useHover } from 'usehooks-ts'
import { useRef } from 'react'

interface IProps {
  onClick?: () => void
  text: string
}
const LeaderboardSelectItem = ({ text, onClick }: IProps) => {
  const hoverRef = useRef(null)
  const isHover = useHover(hoverRef)
  return (
    <>
      <div ref={hoverRef} onClick={onClick} className="cursor-pointer font-bold text-xl flex items-center justify-center text-center">
        <span className={`${isHover ? 'text-[1.3rem] text-red-400' : 'text-blue-400'} duration-500 transition-all`}>{text}</span>
      </div>
    </>
  )
}

export default LeaderboardSelectItem
