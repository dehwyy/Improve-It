import Image from 'next/image'
import { signIn } from 'next-auth/react'
import { FC } from 'react'

interface IProps {
  id: string
  name: string
  children: React.ReactNode
}

const AuthMethodWrapper: FC<IProps> = ({ id, name, children }) => {
  return (
    <div className="flex justify-center gap-x-5 bg-[#333333] text-white p-3 rounded-2xl" onClick={() => signIn(id)}>
      {children}
      <div>Sign in with {name}</div>
    </div>
  )
}

export default AuthMethodWrapper
