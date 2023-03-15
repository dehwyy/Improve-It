import { FC } from 'react'
import SignOut from '@mui/icons-material/ExitToApp'
import { signOut } from 'next-auth/react'

interface IProps {
  userId: string
}
const SignOutIcon: FC<IProps> = ({ userId }) => {
  return userId ? <SignOut onClick={() => signOut()} sx={{ cursor: 'pointer' }} /> : <></>
}

export default SignOutIcon
