import CodeIcon from '@mui/icons-material/CodeOutlined'
import Link from 'next/link'

const DeveloperIcon = () => {
  return (
    <Link href="/develop">
      <CodeIcon sx={{ cursor: 'pointer' }} />
    </Link>
  )
}

export default DeveloperIcon
