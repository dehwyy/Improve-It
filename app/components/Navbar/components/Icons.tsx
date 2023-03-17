import HomePageIcon from '@/app/components/Navbar/components/Icons/HomePageIcon'
import SolveItIcon from '@/app/components/Navbar/components/Icons/SolveItIcon'
import LeaderboardIcon from '@/app/components/Navbar/components/Icons/LeaderboardIcon'
import DeveloperIcon from '@/app/components/Navbar/components/Icons/DeveloperIcon'
import AuthIcon from '@/app/components/Navbar/components/Icons/AuthIcon'
import SignOutIcon from '@/app/components/Navbar/components/Icons/SignOutIcon'
import LanguageIcon from '@/app/components/Navbar/components/Icons/LanguageIcon'

interface IProps {
  userId: string
  isGrowable: boolean
}

const Icons: React.FC<IProps> = ({ userId, isGrowable }) => {
  return (
    <>
      <HomePageIcon idx={0} isGrowable={isGrowable} />
      <SolveItIcon idx={1} isGrowable={isGrowable} />
      <LeaderboardIcon idx={2} isGrowable={isGrowable} />
      <DeveloperIcon idx={3} isGrowable={isGrowable} />
      <AuthIcon idx={4} userId={userId} isGrowable={isGrowable} />
      <SignOutIcon idx={5} userId={userId} isGrowable={isGrowable} />
      <LanguageIcon idx={6} isGrowable={isGrowable} />
    </>
  )
}

export default Icons
