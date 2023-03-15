import Link from 'next/link'
import LeaderboardIcoMui from '@mui/icons-material/LeaderboardOutlined'

const LeaderboardIcon = () => {
  return (
    <Link href="/leaderboard">
      <LeaderboardIcoMui sx={{ cursor: 'pointer' }} />
    </Link>
  )
}

export default LeaderboardIcon
