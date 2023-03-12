import { FC } from 'react'
import AnswersList from '@/app/alpha-result/components/AnswersList'

interface IProps {}

const Page: FC<IProps> = ({}) => {
  return (
    <div className="mx-auto md:w-full w-[800px] flex flex-col mt-5 p-5 bg-[#555555] block-neo-style pb-10">
      <AnswersList />
    </div>
  )
}

export default Page
