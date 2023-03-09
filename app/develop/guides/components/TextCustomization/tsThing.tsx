import { FC } from 'react'

interface IProps {
  children: React.ReactNode
}
const TypescriptThing: FC<IProps> = ({ children }) => {
  return <span className="text-green-400">{children}</span>
}

export default TypescriptThing
