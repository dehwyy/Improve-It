'use client'
import { useUserEditorStore } from '@/app/utils/store/editUserInfoStore'
import usePageUrlEqualsId from '@/app/utils/hooks/UserPageHooks/usePageUrlEqualsId'

interface IProps {
  name: string
}

const Nickname = ({ name }: IProps) => {
  const { nickname } = useUserEditorStore(state => state.initialValues)
  const isCurrentUserPage = usePageUrlEqualsId()
  return <>{(isCurrentUserPage && nickname) || name}</>
}

export default Nickname
