import { FC } from 'react'
import SignOut from '@mui/icons-material/ExitToApp'
import { signOut } from 'next-auth/react'

interface IProps {
  userId: string
}
const SignOutIcon: FC<IProps> = ({ userId }) => {
  return userId ? (
    <a onClick={e => e.preventDefault()}>
      <SignOut onClick={() => signOut()} sx={{ cursor: 'pointer' }} />
    </a>
  ) : (
    <></>
  )
}

export default SignOutIcon
