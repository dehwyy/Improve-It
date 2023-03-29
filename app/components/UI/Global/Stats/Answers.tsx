'use client'
import { FC } from 'react'
import { Mulish } from '@next/font/google'
import useFieldsByLanguage from '@/app/utils/hooks/GlobalHooks/useFieldsByLanguage'
import AnswersLanguages from '@/app/components/UI/Global/Stats/answersLangs'
const pFont = Mulish({
  subsets: ['latin'],
  weight: '400',
})

interface IProps {
  count: number
  correctCount: number
}

const Answers: FC<IProps> = ({ correctCount, count }) => {
  const languages = useFieldsByLanguage(AnswersLanguages) || AnswersLanguages
  return (
    <div className={`text-left min-w-full text-xl text-white w-min pr-5`}>
      <p className={`${pFont.className}`}>
        {languages.correct}:&nbsp;<span className="text-green-400">{correctCount}</span>
      </p>
      <p className={pFont.className}>
        {languages.wrong}:&nbsp;<span className="text-red-400 pl-[8px]">{count - correctCount}</span>
      </p>
    </div>
  )
}

export default Answers
