'use client'
import GuidesLanguages from '@/app/components/Guides/guides'
import { Mulish } from '@next/font/google'
import Skeleton from '@/app/components/Guides/components/SkeletonTemplate'
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
    <div className="mt-8" data-testid="guide_block">
      <div className="text-[1.4rem] flex flex-col items-center vsm:text-xl text-justify leading-10 select-text font-bold text-center">
        <h2 className={`${h2Font.className} text-5xl sm:text-5xl text-center pb-5 text-white font-extrabold sm:leading-[1.2]`}>{language.header}</h2>
      </div>
    </div>
  )
}

export default Guide
