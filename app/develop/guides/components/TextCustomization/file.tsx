import { FC } from 'react'

interface IProps {
  children: React.ReactNode
}
const File: FC<IProps> = ({ children }) => {
  return <span className="text-emerald-400">{children}</span>
}

export default File
