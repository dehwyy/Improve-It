import PageWrapper from '@/app/components/UI/Wrappers/PageWrapper'
import DifficultyItem from '@/app/solve/bot/_components/DifficultyItem'
import { BotDifficulties } from '@/types/export'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Selecting bot difficulty...',
}

const Page = () => {
  return (
    <PageWrapper classes="pb-24 pt-24 lg:pt-18 sm:pt-12">
      <h2 className="text-center text-5xl font-bold pb-7 text-gray-300">Select Bot Difficulty</h2>
      <div className="sm:px-0 px-5 flex flex-col w-1/2 mx-auto lg:w-2/3 sm:w-full gap-9 sm:gap-x-5 usm:gap-x-2 sm:gap-y-9">
        <DifficultyItem difficulty={BotDifficulties.Noob} icon="🤡" />
        <DifficultyItem difficulty={BotDifficulties.Mid} icon="😯" />
        <DifficultyItem difficulty={BotDifficulties.Pro} icon="💀" />
      </div>
    </PageWrapper>
  )
}

export default Page
