import PermIdentityIcon from '@mui/icons-material/PermIdentity'
import { signIn } from 'next-auth/react'
import Link from 'next/link'
import { FC } from 'react'

interface IProps {
  userId: string
}

const AuthIcon: FC<IProps> = ({ userId }) => {
  return (
    <Link href={userId ? `user/${userId}` : ''}>
      <PermIdentityIcon
        onClick={() => {
          !userId && signIn()
        }}
        sx={{ cursor: 'pointer' }}
        fontSize="large"
      />
    </Link>
  )
}

export default AuthIcon
