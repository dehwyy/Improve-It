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
    <div className="mt-10 w-[90%] mx-auto p-8">
      <div className="text-[1.4rem] flex flex-col items-center vsm:text-xl text-white text-justify leading-10 select-text font-bold text-center">
        <h2 className={`${h2Font.className} text-6xl sm:text-4xl vsm:text-3xl text-center pb-5 text-sky-500 font-extrabold`}>{language.header}⭐</h2>
        <p className="text-fuchsia-500 text-center">{language.target}.</p>
        <p className="text-cyan-500 text-center">{language.modsDescription}.</p>
        <p className="text-orange-500 ">{language.modeDiffs}:</p>
        <div>
          <ul style={{ listStyle: 'inside' }} className="text-yellow-500">
            <li>{language.mode1}</li>
            <li>{language.mode2}</li>
            <li>{language.mode3}</li>
            <li>{language.mode4}</li>
          </ul>
        </div>
        <p className="text-indigo-500">{language.partingWords}👍</p>
      </div>
    </div>
  )
}

export default Guide
