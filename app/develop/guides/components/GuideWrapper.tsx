import { FC } from 'react'

interface IProps {
  children: React.ReactNode
}
const GuideWrapper: FC<IProps> = ({ children }) => {
  return <div className="mx-auto md:w-full w-[800px] flex flex-col mt-5 p-5 bg-[#555555] block-neo-style pb-10 text-white">{children}</div>
}

export default GuideWrapper
