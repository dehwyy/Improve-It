import CalculateIcon from '@mui/icons-material/CalculateOutlined'
import Link from 'next/link'
import NavItemWrapper from '@/app/components/Navbar/components/Icons/_components/NavItemWrapper'

interface IProps {
  idx?: number
  isGrowable?: boolean
}

const SolveItIcon = ({ idx, isGrowable }: IProps) => {
  return (
    <NavItemWrapper text="Solve it!" idx={idx} isGrowable={isGrowable}>
      <Link href="/solve">
        <CalculateIcon fontSize="large" sx={{ cursor: 'pointer' }} />
      </Link>
    </NavItemWrapper>
  )
}

export default SolveItIcon
