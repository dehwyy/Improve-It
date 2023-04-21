import { Teleport } from '@/types/teleport'

interface IProps {
  children: React.ReactNode
}

const Teleports = ({ children }: IProps) => {
  return (
    <>
      <div id={Teleport.EditUrlModal} />
      {children}
    </>
  )
}

export default Teleports
