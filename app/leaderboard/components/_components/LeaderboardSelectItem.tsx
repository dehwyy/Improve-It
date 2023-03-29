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
      <div
        ref={hoverRef}
        onClick={onClick}
        className="select-none cursor-pointer font-bold text-xl flex items-center justify-center text-center sm:py-5">
        <span className={`${isHover ? 'sm:text-[1.9rem] text-[1.3rem] text-red-400' : 'text-blue-400'} duration-500 transition-all sm:text-3xl`}>
          {text}
        </span>
      </div>
    </>
  )
}

export default LeaderboardSelectItem
