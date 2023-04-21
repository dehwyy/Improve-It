'use client'
import { useUserEditorStore } from '@/app/utils/store/editUserInfoStore'

interface IProps {
  description?: string | null
}

const Description = ({ description }: IProps) => {
  const { description: descriptionFromStore } = useUserEditorStore(state => state.initialValues)
  return <>{descriptionFromStore || description}</>
}

export default Description
