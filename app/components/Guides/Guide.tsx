'use client'
import GuidesLanguages from '@/app/components/Guides/guides'
import { Mulish } from '@next/font/google'
import Skeleton from '@/app/components/Navbar/SkeletonTemplate'
import useFieldsByLanguage from '@/app/utils/hooks/useFieldsByLanguage'
import { useEffect, useState } from 'react'

const h2Font = Mulish({
  subsets: ['latin', 'cyrillic'],
  weight: '400',
})

const Guide = () => {
  const language = useFieldsByLanguage(GuidesLanguages)
  const [languageLoaded, setLoaded] = useState(false)
  useEffect(() => {
    setLoaded(true)
  }, [])
  if (!languageLoaded) return <Skeleton />
  return (
    <div className="block-neo-style mt-10 w-[90%] mx-auto text-justify p-8">
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
    </div>
  )
}

export default Guide
