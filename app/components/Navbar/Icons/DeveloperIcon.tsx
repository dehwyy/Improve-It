import CodeIcon from '@mui/icons-material/CodeOutlined'
import Link from 'next/link'

const DeveloperIcon = () => {
  return (
    <Link href="/develop">
      <CodeIcon sx={{ cursor: 'pointer' }} fontSize="large" />
    </Link>
  )
}

export default DeveloperIcon
