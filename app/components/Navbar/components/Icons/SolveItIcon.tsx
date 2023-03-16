import CalculateIcon from '@mui/icons-material/CalculateOutlined'
import Link from 'next/link'
import NavItemWrapper from '@/app/components/Navbar/components/Icons/_components/NavItemWrapper'

const SolveItIcon = () => {
  return (
    <NavItemWrapper text="Solve it!">
      <Link href="/solve">
        <CalculateIcon sx={{ cursor: 'pointer' }} />
      </Link>
    </NavItemWrapper>
  )
}

export default SolveItIcon
