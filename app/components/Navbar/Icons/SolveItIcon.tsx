import CalculateIcon from '@mui/icons-material/CalculateOutlined'
import Link from 'next/link'

const SolveItIcon = () => {
  return (
    <Link href="/solve/plusminus">
      <CalculateIcon sx={{ cursor: 'pointer' }} fontSize="large" />
    </Link>
  )
}

export default SolveItIcon
