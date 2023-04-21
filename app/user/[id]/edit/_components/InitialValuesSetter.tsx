'use client'
import { UserChangeableValues, useUserEditorStore } from '@/app/utils/store/editUserInfoStore'
import { useCallback, useEffect } from 'react'
import { shallow } from 'zustand/shallow'

interface IProps extends UserChangeableValues<string> {}

const InitialValuesSetter = ({ nickname, description, img }: IProps) => {
  const [setInitialValues, initialValues] = useUserEditorStore(state => [state.setInitialValues, state.initialValues], shallow)
  const setInitialValueProperty = useCallback(<T extends string>(key: keyof UserChangeableValues<string>, property: T) => {
    return initialValues[key] ? setInitialValues(initialValues[key], key) : setInitialValues(property, key)
  }, [])
  // checking if initialValues.nickname already has a value and if true then rewriting fieldValues ( as side effect ) to prevent refetches
  useEffect(() => {
    setInitialValueProperty('nickname', nickname)
    setInitialValueProperty('description', description)
    setInitialValueProperty('img', img)
  }, [])
  return <></>
}

export default InitialValuesSetter
