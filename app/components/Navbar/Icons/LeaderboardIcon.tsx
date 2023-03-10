import Link from 'next/link'
import LeaderboardIcoMui from '@mui/icons-material/LeaderboardOutlined'

const LeaderboardIcon = () => {
  return (
    <Link href="/leaderboard">
      <LeaderboardIcoMui sx={{ cursor: 'pointer' }} fontSize="large" />
    </Link>
  )
}

export default LeaderboardIcon
