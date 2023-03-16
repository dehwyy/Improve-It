import Home from '@mui/icons-material/HomeOutlined'
import Link from 'next/link'
import NavItemWrapper from '@/app/components/Navbar/components/Icons/_components/NavItemWrapper'

const HomePageIcon = () => {
  return (
    <NavItemWrapper text="Home">
      <Link href="/">
        <Home sx={{ cursor: 'pointer' }} />
      </Link>
    </NavItemWrapper>
  )
}

export default HomePageIcon
