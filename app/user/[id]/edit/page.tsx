import { getUserById } from '@/app/utils/prismaQueries/user/getUserById'
import Capitalized from '@/app/utils/tools/functions/Capitalize'
interface IProps {
  params: {
    id: string
  }
}

const Page = async ({ params }: IProps) => {
  const user = await getUserById(params.id)
  if (!user) return <></>
  return (
    <div className="flex flex-col gap-y-5">
      <div>
        <div className="bg-[#222222] rounded-t-xl p-2 font-[500]">{Capitalized(user.nickname || (user.name as string))}'s profile</div>
        <div className="border-[#222222] border-r-4 border-l-4 h-[100px] w-full bg-[#444444]"></div>
        <div className="flex flex-col items-center p-2 bg-[#222222] rounded-b-xl">
          <img className="rounded-full relative top-[-20px]" src={user.image as string} height="100px" width="100px" alt="image" />
          <span>{user.nickname || user.name}</span>
        </div>
      </div>
      <div>
        <div className="bg-[#222222] rounded-t-xl">{/*I'm going to redo userEditing funcs on this ui soon*/}</div>
      </div>
    </div>
  )
}

export default Page
