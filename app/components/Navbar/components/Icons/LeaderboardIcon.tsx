import Link from 'next/link'
import LeaderboardIcoMui from '@mui/icons-material/LeaderboardOutlined'
import NavItemWrapper from '@/app/components/Navbar/components/Icons/_components/NavItemWrapper'

interface IProps {
  idx: number
  isGrowable: boolean
}

const LeaderboardIcon = ({ idx, isGrowable }: IProps) => {
  return (
    <NavItemWrapper text="Leaderboard" idx={idx} isGrowable={isGrowable}>
      <Link href="/leaderboard">
        <LeaderboardIcoMui fontSize="large" sx={{ cursor: 'pointer' }} />
      </Link>
    </NavItemWrapper>
  )
}

export default LeaderboardIcon
