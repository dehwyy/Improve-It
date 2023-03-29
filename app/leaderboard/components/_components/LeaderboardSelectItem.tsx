import { useHover } from 'usehooks-ts'
import { useMemo, useRef } from 'react'
import { LeaderboardKey } from '@/types/export'
import useMobile from '@/app/utils/hooks/GlobalHooks/useMobile'

interface IProps {
  onClick?: () => void
  text: LeaderboardKey
  isSelected: boolean
}
const LeaderboardSelectItem = ({ text, onClick, isSelected }: IProps) => {
  const fullText = useMemo(() => {
    const dict = {
      'Correctness percentage': "By answers' correctness percentage",
      'Total answers': "By total answers' count",
      Correctness: "By correct answers' count",
    } as Record<LeaderboardKey, string>
    return dict[text]
  }, [])
  const hoverRef = useRef(null)
  const isHover = useHover(hoverRef)
  const { isMobile } = useMobile()
  return (
    <div
      ref={hoverRef}
      onClick={onClick}
      className={`${
        isSelected ? 'bg-[#444444]' : 'bg-[#222222]'
      } relative transition-all duration-300 rounded-md select-none cursor-pointer font-bold text-xl flex items-center justify-center text-center sm:py-5 p-3`}>
      <span className={`sm:text-3xl text-[#D0D0D0]`}>{text}</span>
      <div
        className={`${
          isHover && !isMobile ? 'opacity-100 visible' : 'opacity-0 invisible'
        } absolute bottom-[4.5rem] text-[1rem] whitespace-nowrap transition-all duration-300 bg-[#333333] rounded-md`}>
        {fullText}
      </div>
    </div>
  )
}

export default LeaderboardSelectItem
