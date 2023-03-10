'use client'
import { useUserStore } from '@/app/utils/store/componentsStore'
import GuidesLanguages from '@/app/components/Guides/guides'
import { Varela_Round } from '@next/font/google'
import { useMemo } from 'react'

const h2Font = Varela_Round({
  subsets: ['latin'],
  weight: '400',
})

const Guide = () => {
  const currentLanguage = useUserStore(state => state.lang)
  const language = useMemo(() => {
    return GuidesLanguages[currentLanguage]
  }, [currentLanguage])
  return (
    <>
      <h2 className={`${h2Font.className} text-6xl uusm:text-5xl text-white text-center`}>{language.header}</h2>
      <p>This app is i</p>
    </>
  )
}

export default Guide
