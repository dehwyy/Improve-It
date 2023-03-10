'use client'
import { useUserStore } from '@/app/utils/store/globalStore'
import GuidesLanguages from '@/app/components/Guides/guides'
import { Mulish } from '@next/font/google'
import { useMemo } from 'react'
import Skeleton from '@/app/components/Navbar/SkeletonTemplate'

const h2Font = Mulish({
  subsets: ['latin', 'cyrillic'],
  weight: '400',
})

const Guide = () => {
  const currentLanguage = useUserStore(state => state.lang)
  const language = useMemo(() => {
    return GuidesLanguages[currentLanguage]
  }, [currentLanguage])
  if (!language) return <Skeleton />
  return (
    <div className="text-2xl vsm:text-xl text-white text-justify leading-10 select-text">
      <h2 className={`${h2Font.className} text-6xl sm:text-4xl vsm:text-3xl text-center pb-2`}>{language.header}⭐</h2>
      <p>{language.target}.</p>
      <p>{language.modsDescription}.</p>
      <p>{language.modeDiffs}:</p>
      <ul style={{ listStyle: 'inside' }}>
        <li>{language.mode1}</li>
        <li>{language.mode2}</li>
        <li>{language.mode3}</li>
        <li>{language.mode4}</li>
      </ul>
      <p>{language.partingWords}👍</p>
    </div>
  )
}

export default Guide
