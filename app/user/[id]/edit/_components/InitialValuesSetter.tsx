'use client'
import { useUserEditorStore } from '@/app/utils/store/editUserInfoStore'
import { useEffect } from 'react'
import { shallow } from 'zustand/shallow'

interface IProps {
  nickname: string
}

const InitialValuesSetter = ({ nickname }: IProps) => {
  const [setInitialValues, initialValues] = useUserEditorStore(state => [state.setInitialValues, state.initialValues], shallow)
  // checking if initialValues.nickname already has a value and if true then rewriting fieldValues ( as side effect ) to prevent refetches
  useEffect(() => {
    initialValues.nickname ? setInitialValues(initialValues.nickname, 'nickname') : setInitialValues(nickname, 'nickname')
  }, [])
  return <></>
}

export default InitialValuesSetter
