import { FC } from 'react'
import SignOut from '@mui/icons-material/ExitToApp'
import { signOut } from 'next-auth/react'
import NavItemWrapper from '@/app/components/Navbar/components/Icons/_components/NavItemWrapper'

interface IProps {
  userId: string
}
const SignOutIcon: FC<IProps> = ({ userId }) => {
  return userId ? (
    <NavItemWrapper text="Sign out">
      <a onClick={e => e.preventDefault()}>
        <SignOut onClick={() => signOut()} sx={{ cursor: 'pointer' }} />
      </a>
    </NavItemWrapper>
  ) : (
    <></>
  )
}

export default SignOutIcon
