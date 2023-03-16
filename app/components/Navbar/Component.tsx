'use client'
import { FC, memo, useEffect } from 'react'
import HomePageIcon from '@/app/components/Navbar/components/Icons/HomePageIcon'
import SolveItIcon from '@/app/components/Navbar/components/Icons/SolveItIcon'
import LeaderboardIcon from '@/app/components/Navbar/components/Icons/LeaderboardIcon'
import DeveloperIcon from '@/app/components/Navbar/components/Icons/DeveloperIcon'
import AuthIcon from '@/app/components/Navbar/components/Icons/AuthIcon'
import SignOutIcon from '@/app/components/Navbar/components/Icons/SignOutIcon'
import LanguageIcon from '@/app/components/Navbar/components/Icons/LanguageIcon'
import { AvailableLanguages, useUserStore } from '@/app/utils/store/globalStore'
import { shallow } from 'zustand/shallow'

interface IProps {
  userId: string
}

const Navbar: FC<IProps> = ({ userId }) => {
  const [allLanguages, setLanguage] = useUserStore(state => [state.allLanguages, state.changeLang], shallow)
  useEffect(() => {
    for (const language of navigator.languages) {
      if (allLanguages.includes(language as AvailableLanguages)) {
        setLanguage(language as AvailableLanguages)
      }
    }
  }, [])
  return (
    <nav className="fixed right-0 top-0 left-0 select-none z-50 bg-gradient-to-b from-violet-700 to-violet-500">
      <div className="flex-row-reverse w-full  px-10 p-3 usm:px-5 flex vsm:justify-center justify-start">
        <div className="flex justify-start vsm:justify-center usm:gap-2 vsm:gap-5 transition-all gap-10 text-zinc-800">
          <HomePageIcon />
          <SolveItIcon />
          <LeaderboardIcon />
          <DeveloperIcon />
          <AuthIcon userId={userId} />
          <SignOutIcon userId={userId} />
          <LanguageIcon />
        </div>
      </div>
    </nav>
  )
}

export default memo(Navbar)
