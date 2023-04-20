'use client'
import { useUserEditorStore } from '@/app/utils/store/editUserInfoStore'

interface IProps {
  name: string
}

const Nickname = ({ name }: IProps) => {
  const { nickname } = useUserEditorStore(state => state.initialValues)
  return <>{nickname || name}</>
}

export default Nickname
