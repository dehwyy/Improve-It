import PageWrapper from '@/app/components/UI/Wrappers/PageWrapper'
import DifficultyItem from '@/app/solve/bot/_components/DifficultyItem'
import { BotDifficulties } from '@/types/export'

const Page = () => {
  return (
    <PageWrapper classes="pb-24 pt-24 lg:pt-18 sm:pt-12">
      <h2 className="text-center text-5xl font-extrabold pb-7 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500">
        Bot Difficulty
      </h2>
      <div className="sm:px-0 px-5 grid grid-cols-2 w-1/2 mx-auto lg:w-2/3 sm:w-full gap-9 sm:gap-x-5 usm:gap-x-2 sm:gap-y-9">
        <DifficultyItem difficulty={BotDifficulties.Noob} icon="🤡" />
        <DifficultyItem difficulty={BotDifficulties.Mid} icon="😯" />
        <div className="col-span-2 px-12 sm:px-6">
          <DifficultyItem difficulty={BotDifficulties.Pro} icon="💀" />
        </div>
      </div>
    </PageWrapper>
  )
}

export default Page
