import { FC } from 'react'

interface IProps {
  children: React.ReactNode
}

const ContentWrapper: FC<IProps> = ({ children }) => {
  return <main className="w-[1100px] max-w-full mx-auto pt-[100px] min-h-screen h-full p-5 ">{children}</main>
}

export default ContentWrapper
