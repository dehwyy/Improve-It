'use client'
import { useUserEditorStore } from '@/app/utils/store/editUserInfoStore'
import dynamic from 'next/dynamic'
import Camera from '@/app/components/UI/Global/Camera'
import { useModalWindowsStore } from '@/app/utils/store/modalWindowsStore'
import Image from 'next/image'

const ModalForUrl = dynamic(() => import('@/app/user/[id]/edit/fields/_components/ModalForUrl'), { ssr: false })

interface IProps {
  img: string
}

const ProfileImage = ({ img }: IProps) => {
  const imageFromStore = useUserEditorStore(state => state.initialValues.img)
  const setWindowsState = useModalWindowsStore(state => state.setOpenWindow)
  return (
    <>
      <span className="relative top-[-50px] mb-[-50px] w-full">
        <span className="hover:cursor-pointer flex relative w-[100px] h-[100px] mx-auto">
          <Camera callback={() => setWindowsState('ProfileImage', true)} />
          <Image
            className="rounded-full absolute h-[100px] max-w-[100px] object-cover object-top"
            src={imageFromStore || img}
            height="300"
            width="300"
            quality={100}
            alt="image"
          />
        </span>
      </span>
      <ModalForUrl windowKey={'ProfileImage'} stateKey={'img'} initialValueFromComponent={imageFromStore || img} />
    </>
  )
}

export default ProfileImage
