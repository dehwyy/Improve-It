'use client'
import { useUserEditorStore } from '@/app/utils/store/editUserInfoStore'
import EditIcon from '@mui/icons-material/Edit'
import Image from 'next/image'
import usePageUrlEqualsId from '@/app/utils/hooks/UserPageHooks/usePageUrlEqualsId'

interface IProps {
  image: string | null | undefined
  name: string | null | undefined
}

const UserBackgroundImage = ({ name, image }: IProps) => {
  const { backgroundImg } = useUserEditorStore(state => state.initialValues)
  const isCurrentUserPage = usePageUrlEqualsId()
  console.log((isCurrentUserPage && backgroundImg) || image)
  return (isCurrentUserPage && backgroundImg) || image ? (
    <div className="mb-[-2rem] select-none border-4 shadow-md border-[#444444] shadow-[#444444] bg-[#444444] rounded-2xl z-20 h-[350px] lg:h-[300px] md:h-[250px] sm:h-[150px] w-full relative">
      {image && (
        <Image
          fill={true}
          className="rounded-2xl absolute object-cover object-center h-full w-full"
          src={((isCurrentUserPage && backgroundImg) || image) as string}
          alt={name || 'Background picture'}
        />
      )}
    </div>
  ) : (
    <></>
  )
}

export default UserBackgroundImage
