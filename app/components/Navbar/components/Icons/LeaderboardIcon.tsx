import Link from 'next/link'
import LeaderboardIcoMui from '@mui/icons-material/LeaderboardOutlined'
import NavItemWrapper from '@/app/components/Navbar/components/Icons/_components/NavItemWrapper'

const LeaderboardIcon = () => {
  return (
    <NavItemWrapper text="Leaderboard">
      <Link href="/leaderboard">
        <LeaderboardIcoMui sx={{ cursor: 'pointer' }} />
      </Link>
    </NavItemWrapper>
  )
}

export default LeaderboardIcon
