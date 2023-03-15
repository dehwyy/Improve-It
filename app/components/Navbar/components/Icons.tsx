import HomePageIcon from '@/app/components/Navbar/components/Icons/HomePageIcon'
import SolveItIcon from '@/app/components/Navbar/components/Icons/SolveItIcon'
import LeaderboardIcon from '@/app/components/Navbar/components/Icons/LeaderboardIcon'
import DeveloperIcon from '@/app/components/Navbar/components/Icons/DeveloperIcon'
import AuthIcon from '@/app/components/Navbar/components/Icons/AuthIcon'
import SignOutIcon from '@/app/components/Navbar/components/Icons/SignOutIcon'
import LanguageIcon from '@/app/components/Navbar/components/Icons/LanguageIcon'
import ExpandNavbar from '@/app/components/Navbar/components/Icons/ExpandNavbar'

interface IProps {
  userId: string
}

const Icons: React.FC<IProps> = ({ userId }) => {
  return (
    <>
      <HomePageIcon />
      <SolveItIcon />
      <LeaderboardIcon />
      <DeveloperIcon />
      <AuthIcon userId={userId} />
      <SignOutIcon userId={userId} />
      <LanguageIcon />
      <ExpandNavbar />
    </>
  )
}

export default Icons
