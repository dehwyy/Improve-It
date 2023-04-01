import PermIdentityIcon from '@mui/icons-material/PermIdentity'
import { signIn } from 'next-auth/react'
import Link from 'next/link'
import { FC } from 'react'
import NavItemWrapper from '@/app/components/Navbar/components/Icons/_components/NavItemWrapper'

interface IProps {
  userId: string
  idx: number
  isGrowable: boolean
}

const AuthIcon: FC<IProps> = ({ userId, idx, isGrowable }) => {
  return (
    <NavItemWrapper text={userId ? 'Profile' : 'Authorization'} idx={idx} isGrowable={isGrowable}>
      <Link href={userId ? `user/${userId}` : '/'}>
        <PermIdentityIcon
          fontSize="large"
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
