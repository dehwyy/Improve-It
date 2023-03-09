import { FC } from 'react'

interface IProps {
  children: React.ReactNode
}
const GuideContentWrapper: FC<IProps> = ({ children }) => {
  return <div className="flex-auto flex flex-col gap-y-5 mt-5 text-xl leading-7 text-justify">{children}</div>
}

export default GuideContentWrapper
