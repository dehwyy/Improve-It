'use client'
import StyleWrapper from '@/app/components/UI/Wrappers/StyleWrapper'
import { BotDifficulties } from '@/types/export'
import { useGameBotStore } from '@/app/utils/store/gameTypeStore'
import Link from 'next/link'
interface IProps {
  difficulty: BotDifficulties
  icon: string
}
const DifficultyItem = ({ difficulty, icon }: IProps) => {
  const setBotDifficulty = useGameBotStore(state => state.setBotDifficulty)
  return (
    <Link href="/solve/edit">
      <StyleWrapper
        onClick={() => setBotDifficulty(difficulty)}
        className="hover:scale-105 hover:text-red-500 hover:shadow-red-500 usm:p-[12px] text-center text-fuchsia-500 shadow-fuchsia-500 shadow-lg border-current">
        <p>
          <span className="font-bold text-transparent bg-clip-text bg-gradient-to-br from-purple-500 to-red-500">{difficulty}</span>
          {icon}
        </p>
      </StyleWrapper>
    </Link>
  )
}

export default DifficultyItem
