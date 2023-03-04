import { FC } from 'react'

interface IProps {
  children: React.ReactNode
}

const EquationsWrapper: FC<IProps> = ({ children }) => {
  return <div className={`p-1 grid grid-cols-2 lg:grid-cols-1 vsm:p-0`}>{children}</div>
}

export default EquationsWrapper
