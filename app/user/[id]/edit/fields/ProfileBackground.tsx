'use client'
import { useUserEditorStore } from '@/app/utils/store/editUserInfoStore'
import dynamic from 'next/dynamic'
import { useModalWindowsStore } from '@/app/utils/store/modalWindowsStore'
import EditIcon from '@mui/icons-material/Edit'
import { useMemo } from 'react'

const ModalForUrl = dynamic(() => import('@/app/user/[id]/edit/fields/_components/ModalForUrl'), { ssr: false })

interface IProps {
  img: string
}

const ProfileBackground = ({ img }: IProps) => {
  const imageFromStore = useUserEditorStore(state => state.initialValues.backgroundImg)
  const setWindowsState = useModalWindowsStore(state => state.setOpenWindow)
  const image = useMemo(() => imageFromStore || img, [imageFromStore, img])
  return (
    <>
      <div className="select-none border-[#222222] border-r-4 border-l-4 h-[350px] lg:h-[300px] md:h-[250px] sm:h-[200px] w-full bg-[#444444] relative">
        <div
          onClick={() => setWindowsState('ProfileBackgroundImage', true)}
          className="z-20 cursor-pointer absolute right-0 top-0 px-4 pb-3 pt-1 mt-2 mr-2 rounded-2xl text-lg bg-[#00000080]">
          <span className="relative top-1 right-1">Change background</span>
          <EditIcon />
        </div>
        {image && <img className="absolute object-cover object-center h-full w-full" src={image} alt="background_image" />}
      </div>
      <ModalForUrl windowKey={'ProfileBackgroundImage'} stateKey={'backgroundImg'} initialValueFromComponent={image} />
    </>
  )
}

export default ProfileBackground
