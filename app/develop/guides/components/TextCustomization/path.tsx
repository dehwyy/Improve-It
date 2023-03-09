import { FC } from 'react'

interface IProps {
  children: React.ReactNode
}
const Path: FC<IProps> = ({ children }) => {
  return <span className="text-rose-400">{children}</span>
}

export default Path
