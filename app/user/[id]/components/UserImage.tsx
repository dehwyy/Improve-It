'use client'
import { useUserEditorStore } from '@/app/utils/store/editUserInfoStore'

interface IProps {
  image?: string | null
  name?: string | null
}
const UserImage = ({ name, image }: IProps) => {
  const { img } = useUserEditorStore(state => state.initialValues)
  return (
    <div className="block-neo-style self-center uusm:min-w-[200px] uusm:min-h-[200px] min-w-[250px] min-h-[250px] bg-[#333333]">
      <img
        className="rounded-xl uusm:w-[200px] uusm:max-h-[200px] max-h-[250px] w-[250px] object-cover object-top"
        src={img || image || '/images/profile_image.jpg'}
        alt={name || 'Profile picture'}
      />
    </div>
  )
}

export default UserImage
