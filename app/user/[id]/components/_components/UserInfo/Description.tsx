'use client'
import { useUserEditorStore } from '@/app/utils/store/editUserInfoStore'
import usePageUrlEqualsId from '@/app/utils/hooks/UserPageHooks/usePageUrlEqualsId'

interface IProps {
  description?: string | null
}

const Description = ({ description }: IProps) => {
  const { description: descriptionFromStore } = useUserEditorStore(state => state.initialValues)
  const isCurrentUserPage = usePageUrlEqualsId()
  return <>{(isCurrentUserPage && descriptionFromStore) || description}</>
}

export default Description
