import { FC } from 'react'

interface IProps {
  children: React.ReactNode
}
const Variable: FC<IProps> = ({ children }) => {
  return <span className="text-red-500">{children}</span>
}

export default Variable
