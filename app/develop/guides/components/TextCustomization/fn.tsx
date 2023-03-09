import { FC } from 'react'

interface IProps {
  children: React.ReactNode
}
const Function: FC<IProps> = ({ children }) => {
  return <span className="text-violet-400">{children}</span>
}

export default Function
