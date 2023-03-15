'use client'
import { FC, memo, useEffect } from 'react'
import HomePageIcon from '@/app/components/Navbar/components/Icons/HomePageIcon'
import SolveItIcon from '@/app/components/Navbar/components/Icons/SolveItIcon'
import LeaderboardIcon from '@/app/components/Navbar/components/Icons/LeaderboardIcon'
import DeveloperIcon from '@/app/components/Navbar/components/Icons/DeveloperIcon'
import AuthIcon from '@/app/components/Navbar/components/Icons/AuthIcon'
import SignOutIcon from '@/app/components/Navbar/components/Icons/SignOutIcon'
import ExpandNavbar from '@/app/components/Navbar/components/Icons/ExpandNavbar'
import Transition from '@/app/components/Navbar/components/Transition'
import LanguageIcon from '@/app/components/Navbar/components/Icons/LanguageIcon'
import { AvailableLanguages, useUserStore } from '@/app/utils/store/globalStore'
import { shallow } from 'zustand/shallow'
import AlphaWrapper from '@/app/components/Navbar/components/AlphaWrapper'

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
    <nav className="fixed right-0 top-0 left-0 select-none z-50">
      <AlphaWrapper>
        <div className="flex justify-start vsm:justify-center vsm:gap-5 transition-all gap-10 text-zinc-800">
          <HomePageIcon />
          <SolveItIcon />
          <LeaderboardIcon />
          <DeveloperIcon />
          <AuthIcon userId={userId} />
          <SignOutIcon userId={userId} />
          <LanguageIcon />
        </div>
      </AlphaWrapper>
    </nav>
  )
}

export default memo(Navbar)
