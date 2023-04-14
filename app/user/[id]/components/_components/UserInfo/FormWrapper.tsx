'use client'
import { useUserEditorStore } from '@/app/utils/store/editUserInfoStore'
import { shallow } from 'zustand/shallow'
import ClickAwayListener from '@mui/base/ClickAwayListener'
import Button from '@/app/user/[id]/components/_components/UserInfo/__components/Button'
import useSetIsEditAble from '@/app/utils/hooks/UserEditorHooks/useSetIsEditAble'

interface IProps {
  children: React.ReactNode
}

const FormWrapper = ({ children }: IProps) => {
  useSetIsEditAble()
  const [onClickAwayHandler, hasAccessToEdit] = useUserEditorStore(state => [state.clickAwayHandler, state.hasAccessToEdit], shallow)
  return hasAccessToEdit ? (
    <ClickAwayListener onClickAway={onClickAwayHandler} touchEvent="onTouchStart" mouseEvent="onMouseDown">
      <span className="w-full h-full">{children}</span>
    </ClickAwayListener>
  ) : (
    <>{children}</>
  )
}

export default FormWrapper
