import PermIdentityIcon from '@mui/icons-material/PermIdentity'
import { signIn } from 'next-auth/react'
import Link from 'next/link'
import { FC } from 'react'
import NavItemWrapper from '@/app/components/Navbar/components/Icons/_components/NavItemWrapper'

interface IProps {
  userId: string
}

const AuthIcon: FC<IProps> = ({ userId }) => {
  return (
    <NavItemWrapper text={userId ? 'Profile' : 'Authorization'}>
      <Link href={userId ? `user/${userId}` : ''}>
        <PermIdentityIcon
          onClick={() => {
            !userId && signIn()
          }}
          sx={{ cursor: 'pointer' }}
        />
      </Link>
    </NavItemWrapper>
  )
}

export default AuthIcon
