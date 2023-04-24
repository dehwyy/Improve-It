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
        className="hover:scale-105 hover:text-red-500 hover:shadow-red-500 usm:p-[12px] text-center text-blue-600 shadow-blue-600 shadow-lg border-current">
        <p className="text-3xl text-blue-500 transition-all">
          <span className="font-bold">{difficulty}</span>
          {icon}
        </p>
      </StyleWrapper>
    </Link>
  )
}

export default DifficultyItem
