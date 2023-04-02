'use client'
import { signIn } from 'next-auth/react'
import { FC } from 'react'
import styled from '@emotion/styled'

const SvgColorizer = styled.div`
  & path {
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }
  &:hover path:first-child {
    fill: rgb(239, 68, 68);
  }
`
export const GoogleWrapperForSvg = styled.div`
  &:hover path {
    fill: rgb(239, 68, 68);!important;
  }
`
interface IProps {
  id: string
  name: string
  color: string
  children: React.ReactNode
}

const AuthMethodWrapper: FC<IProps> = ({ id, name, children, color }) => {
  return (
    <SvgColorizer
      className={`flex font-extrabold text-${color}-500 shadow-${color}-500 shadow-${color}-500/100 justify-center gap-x-5 hover:text-red-500 hover:shadow-red-500/100 select-none cursor-pointer rounded-lg p-4 transition-all shadow-lg border-2 border-current hover:border-current`}
      onClick={() => signIn(id)}>
      {children}
      <div>Sign in with {name}</div>
    </SvgColorizer>
  )
}
export default AuthMethodWrapper
