import { createPortal } from 'react-dom'
import CloseIcon from '@mui/icons-material/Close'
import { Teleport } from '@/types/teleport'
import useModalWindow, { PossibleUserChangeableImages } from '@/app/utils/hooks/LocalHooks/useModalWindow'
import { ModalWindows, useModalWindowsStore } from '@/app/utils/store/modalWindowsStore'

interface IProps {
  windowKey: ModalWindows
  stateKey: PossibleUserChangeableImages
}

const ModalForUrl = ({ windowKey, stateKey }: IProps) => {
  const { value, setValue, closeWindow, submitHandler, isAbleToSubmit, setDataFromBuffer, valueFromBuffer } = useModalWindow({
    windowKey,
    stateKey,
  })
  const isOpen = useModalWindowsStore(state => state.isOpenWindow)
  return createPortal(
    <div
      className={`${
        isOpen[windowKey] ? 'bg-[#11111180]' : 'invisible opacity-0 bg-transparent'
      } transition-all duration-500 fixed top-0 left-0 right-0 bottom-0 z-30 flex items-center justify-center`}>
      <div
        className={`${
          isOpen[windowKey] ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'
        } transition-all duration-500 w-2/3 lg:w-[95%] mx-auto bg-[#111111] rounded-2xl px-12 py-5 sm:px-5 relative`}>
        <span onClick={closeWindow} className="absolute top-[-10px] right-[-10px] bg-[#111111] rounded-full p-1 cursor-pointer">
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
            onClick={setDataFromBuffer}>
            Clear and paste from buffer
          </button>
          <button
            onClick={submitHandler}
            className={`${
              isAbleToSubmit ? 'shadow-md' : 'opacity-50 shadow-none'
            } bg-[#272727] w-full text-gray-300 transition-all rounded-xl border-2 border-blue-500 shadow-blue-500 py-1 px-5`}>
            Submit
          </button>
        </div>
      </div>
    </div>,
    document.getElementById(Teleport.EditUrlModal) as HTMLInputElement
  )
}

export default ModalForUrl
