'use client'
import { Mulish } from 'next/font/google'
import useFieldsByLanguage from '@/app/utils/hooks/GlobalHooks/useFieldsByLanguage'
import LeaderboardLanguages from '@/app/leaderboard/leaderboard'

const h1Font = Mulish({
  subsets: ['latin', 'cyrillic'],
  weight: '400',
})

const Heading = () => {
  const language = useFieldsByLanguage(LeaderboardLanguages)
  return (
    <h1
      data-testid="leaderboard-heading"
      className={`${h1Font.className} py-5 text-center text-7xl uusm:text-6xl font-extrabold text-white vsm:text-[2.7rem] uusm:text-4xl`}>
      {language.leaderboard || LeaderboardLanguages.eng.leaderboard}
    </h1>
  )
}

export default Heading
