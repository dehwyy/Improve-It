import Home from '@mui/icons-material/HomeOutlined'
import Link from 'next/link'
import NavItemWrapper from '@/app/components/Navbar/components/Icons/_components/NavItemWrapper'

interface IProps {
  idx: number
  isGrowable: boolean
}

const HomePageIcon = ({ idx, isGrowable }: IProps) => {
  return (
    <NavItemWrapper text="Home" idx={idx} isGrowable={isGrowable}>
      <Link href="/">
        <Home fontSize="large" sx={{ cursor: 'pointer' }} />
      </Link>
    </NavItemWrapper>
  )
}

export default HomePageIcon
