import { FC } from 'react'

interface IProps {
  children: React.ReactNode
}
const Folder: FC<IProps> = ({ children }) => {
  return <span className="text-teal-400">{children}</span>
}

export default Folder
