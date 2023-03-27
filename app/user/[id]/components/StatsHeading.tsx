'use client'
import useFieldsByLanguage from '@/app/utils/hooks/GlobalHooks/useFieldsByLanguage'
import AnswersLanguages from '@/app/components/UI/Global/Stats/answersLangs'
import { Mulish } from '@next/font/google'

const h2Font = Mulish({
  subsets: ['latin', 'cyrillic'],
  weight: '400',
})
const StatsHeading = () => {
  const language = useFieldsByLanguage(AnswersLanguages) || AnswersLanguages.eng

  return <h2 className={`${h2Font.className} uusm:text-xl text-2xl pb-2`}>{language.correct}</h2>
}

export default StatsHeading
