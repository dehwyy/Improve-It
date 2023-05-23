'use client'
import { useUserEditorStore } from '@/app/utils/store/editUserInfoStore'
import Image from 'next/image'

interface IProps {
  image: string | null | undefined
  name: string | null | undefined
  backgroundImage: string | null | undefined
}

const UserImage = ({ name, image, backgroundImage }: IProps) => {
  const { img } = useUserEditorStore(state => state.initialValues)
  return (
    <div className={`mt-2 relative uusm:min-w-[200px] uusm:min-h-[200px] min-w-[250px] min-h-[250px] z-30`}>
      <Image
        fill={true}
        quality={100}
        priority
        className={`${
          backgroundImage && 'absolute top-0'
        } border-4 border-[#444444] shadow-[#444444] bg-[#444444] shadow-md rounded-full uusm:w-[200px] uusm:h-[200px] h-[250px] w-[250px] object-cover object-top`}
        src={img || image || '/images/profile_image.jpg'}
        alt={name || 'Profile picture'}
      />
    </div>
  )
}

export default UserImage
