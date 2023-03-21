import { FC } from 'react'
import SignOut from '@mui/icons-material/ExitToApp'
import { signOut } from 'next-auth/react'
import NavItemWrapper from '@/app/components/Navbar/components/Icons/_components/NavItemWrapper'

interface IProps {
  userId: string
  idx: number
  isGrowable: boolean
}

const SignOutIcon: FC<IProps> = ({ userId, idx, isGrowable }) => {
  return userId ? (
    <NavItemWrapper text="Sign out" idx={idx} isGrowable={isGrowable}>
      <a
        onClick={e => {
          e.preventDefault()
          signOut().then()
        }}>
        <SignOut fontSize="large" sx={{ cursor: 'pointer' }} />
      </a>
    </NavItemWrapper>
  ) : (
    <></>
  )
}

export default SignOutIcon
