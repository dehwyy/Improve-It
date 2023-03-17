import CodeIcon from '@mui/icons-material/CodeOutlined'
import Link from 'next/link'
import NavItemWrapper from '@/app/components/Navbar/components/Icons/_components/NavItemWrapper'

interface IProps {
  idx: number
  isGrowable: boolean
}

const DeveloperIcon = ({ idx, isGrowable }: IProps) => {
  return (
    <NavItemWrapper text="For developers" idx={idx} isGrowable={isGrowable}>
      <Link href="/develop">
        <CodeIcon fontSize="large" sx={{ cursor: 'pointer' }} />
      </Link>
    </NavItemWrapper>
  )
}

export default DeveloperIcon
