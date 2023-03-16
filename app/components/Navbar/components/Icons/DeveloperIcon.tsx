import CodeIcon from '@mui/icons-material/CodeOutlined'
import Link from 'next/link'
import NavItemWrapper from '@/app/components/Navbar/components/Icons/_components/NavItemWrapper'

const DeveloperIcon = () => {
  return (
    <NavItemWrapper text="For developers">
      <Link href="/develop">
        <CodeIcon sx={{ cursor: 'pointer' }} />
      </Link>
    </NavItemWrapper>
  )
}

export default DeveloperIcon
