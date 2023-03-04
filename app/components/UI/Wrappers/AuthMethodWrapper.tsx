import Image from 'next/image'
import { signIn } from 'next-auth/react'
import { FC } from 'react'

interface IProps {
  id: string
  name: string
}

const AuthMethodWrapper: FC<IProps> = ({ id, name }) => {
  return (
    <div className="flex justify-center gap-x-5 bg-[#333333] text-white p-3 rounded-2xl" onClick={() => signIn(id)}>
      <Image src={`/svg/${name}.svg`} alt={'vk'} width={24} height={24} />
      <div>Sign in with {name}</div>
    </div>
  )
}

export default AuthMethodWrapper
