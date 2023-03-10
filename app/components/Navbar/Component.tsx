'use client'
import { FC, memo } from 'react'
import HomePageIcon from '@/app/components/Navbar/Icons/HomePageIcon'
import SolveItIcon from '@/app/components/Navbar/Icons/SolveItIcon'
import LeaderboardIcon from '@/app/components/Navbar/Icons/LeaderboardIcon'
import DeveloperIcon from '@/app/components/Navbar/Icons/DeveloperIcon'
import AuthIcon from '@/app/components/Navbar/Icons/AuthIcon'
import SignOutIcon from '@/app/components/Navbar/Icons/SignOutIcon'
import ExpandNavbar from '@/app/components/Navbar/Icons/ExpandNavbar'
import Transition from '@/app/components/Navbar/Transition'

interface IProps {
  userId: string
}

const Navbar: FC<IProps> = ({ userId }) => {
  return (
    <nav className="fixed right-0 top-0 select-none h-[100px] z-50">
      <Transition>
        <HomePageIcon />
        <SolveItIcon />
        <LeaderboardIcon />
        <DeveloperIcon />
        <AuthIcon userId={userId} />
        <SignOutIcon userId={userId} />
        <ExpandNavbar />
      </Transition>
    </nav>
  )
}

export default memo(Navbar)
