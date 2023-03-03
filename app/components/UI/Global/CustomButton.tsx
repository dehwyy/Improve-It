import { FC } from 'react'

interface IProps {
  children: React.ReactNode
}

const CustomButton: FC<IProps> = ({ children }) => {
  return <div className="active:top-[2px] relative top-0 bg-white block-neo-style py-5 w-[250px] text-center">{children}</div>
}

export default CustomButton
