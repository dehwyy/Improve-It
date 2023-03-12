import { FC } from 'react'

interface IProps {
  children: React.ReactNode
}
const CreateYourOwnTemplate: FC<IProps> = ({ children }) => {
  return (
    <h1 className={`text-center text-5xl usm:text-4xl uusm:text-3xl text-white vsm:text-[2.85rem] uusm:text-4xl`}>
      How to create your own {'<'}
      <span className="text-red-400 underline decoration-2">{children}</span>
      {'>'}
    </h1>
  )
}

export default CreateYourOwnTemplate
