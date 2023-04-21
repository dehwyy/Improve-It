'use client'
import useEditField from '@/app/utils/hooks/LocalHooks/useEditField'
import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { Teleport } from '@/types/teleport'
import CloseIcon from '@mui/icons-material/Close'
import { useUserEditorStore } from '@/app/utils/store/editUserInfoStore'
interface IProps {
  img: string
}

const ProfileImage = ({ img }: IProps) => {
  const [isOpen, setOpen] = useState(false)
  const [valueFromBuffer, setValueFromBuffer] = useState<string | null>(null)
  const { value, setValue, submit } = useEditField({ key: 'img' })
  const imageFromStore = useUserEditorStore(state => state.initialValues.img)
  const [initialValue, setInitialValue] = useState('')
  useEffect(() => {
    navigator.clipboard.readText().then(text => {
      setValueFromBuffer(text)
    })
  }, [])
  useEffect(() => {
    if (!initialValue) {
      setInitialValue(value)
    }
  }, [value])
  const setDataFromClipboard = () => {
    navigator.clipboard.readText().then(text => {
      setValueFromBuffer(text)
      if (text) {
        setValue(text)
      }
    })
  }
  const closeWindow = () => {
    setValue(initialValue)
    setOpen(false)
  }
  const isValidImg = (img: string) => img.includes('.png') || img.includes('.jpg' || img.includes('.jpeg'))
  return (
    <>
      {isOpen &&
        createPortal(
          <div className="fixed top-0 left-0 right-0 bottom-0 bg-[#11111180] z-30 flex items-center justify-center">
            <div className="w-2/3 lg:w-[95%] mx-auto bg-[#111111] rounded-2xl px-12 py-5 sm:px-5 relative">
              <span onClick={closeWindow} className="absolute top-[-10px] right-[-10px] bg-[#111111] rounded-full p-1">
                <CloseIcon fontSize="large" />
              </span>
              <h2 className="pb-5 text-3xl">Paste url to image:</h2>
              <input
                value={value}
                onChange={setValue}
                className="w-full text-bold text-xl p-3 outline-0 border-2 border-fuchsia-500 rounded-xl shadow-md focus:shadow-fuchsia-500 transition-all"
              />
              <div className="text-2xl sm:text-xl grid grid-cols-3 sm:grid-cols-1 gap-5 pt-5">
                <button
                  className={`${
                    valueFromBuffer ? 'shadow-md' : 'opacity-50 shadow-none'
                  } col-span-2 sm:col-span-1 bg-[#272727] w-full text-gray-300 transition-all rounded-xl border-2 border-green-500 shadow-green-500 py-1 px-5`}
                  onClick={setDataFromClipboard}>
                  Clear and paste from buffer
                </button>
                <button
                  onClick={() => {
                    if (isValidImg(value) && value !== initialValue) {
                      setInitialValue(value)
                      submit()
                      setOpen(false)
                    }
                  }}
                  className={`${
                    value && isValidImg(value) && value !== initialValue ? 'shadow-md' : 'opacity-50 shadow-none'
                  } bg-[#272727] w-full text-gray-300 transition-all rounded-xl border-2 border-blue-500 shadow-blue-500 py-1 px-5`}>
                  Submit
                </button>
              </div>
            </div>
          </div>,
          document.getElementById(Teleport.EditUrlModal) as HTMLInputElement
        )}
      <span className="relative top-[-50px] mb-[-50px] w-full">
        <span className="hover:cursor-pointer flex relative w-[100px] h-[100px] mx-auto">
          <Camera handleOpen={() => setOpen(true)} />
          <img
            className="rounded-full absolute max-h-[100px] max-w-[100px] object-cover object-top"
            src={imageFromStore || img}
            height="100px"
            width="100px"
            alt="image"
          />
        </span>
      </span>
    </>
  )
}

const Camera = ({ handleOpen }: { handleOpen: () => void }) => (
  <span onClick={handleOpen} className="z-20 bg-[#00000080] h-full w-full flex items-center justify-center rounded-full">
    <svg fill="#000000" width="50px" height="50px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
      <path
        fill="white"
        d="M29 7h-4.599l-2.401-4h-12l-2.4 4h-4.6c-1 0-3 1-3 2.969v16.031c0 1.657 1.5 3 2.792 3h26.271c1.313 0 2.938-1.406 2.938-2.968v-16.032c0-1-1-3-3-3zM30 26.032c0 0.395-0.639 0.947-0.937 0.969h-26.265c-0.232-0.019-0.797-0.47-0.797-1v-16.031c0-0.634 0.851-0.953 1-0.969h5.732l2.4-4h9.802l1.785 3.030 0.55 0.97h5.731c0.705 0 0.99 0.921 1 1v16.032zM16 10c-3.866 0-7 3.134-7 7s3.134 7 7 7 7-3.134 7-7-3.134-7-7-7zM16 22c-2.757 0-5-2.243-5-5s2.243-5 5-5 5 2.243 5 5-2.243 5-5 5z"></path>
    </svg>
  </span>
)

export default ProfileImage
