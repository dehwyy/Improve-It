import Home from '@mui/icons-material/HomeOutlined'
import Link from 'next/link'

const HomePageIcon = () => {
  return (
    <Link href="/">
      <Home sx={{ cursor: 'pointer' }} />
    </Link>
  )
}

export default HomePageIcon
