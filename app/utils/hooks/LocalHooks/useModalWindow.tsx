import { useCallback, useEffect, useMemo, useState } from 'react'
import useEditField from '@/app/utils/hooks/LocalHooks/useEditField'
import { ModalWindows, useModalWindowsStore } from '@/app/utils/store/modalWindowsStore'
import { UserChangeableValues } from '@/app/utils/store/editUserInfoStore'

export type PossibleUserChangeableImages = keyof Pick<UserChangeableValues<string>, 'img' | 'backgroundImg'>

interface IProps {
  windowKey: ModalWindows
  stateKey: PossibleUserChangeableImages
}

export default function useModalWindow({ windowKey, stateKey }: IProps) {
  const setWindowsState = useModalWindowsStore(state => state.setOpenWindow)
  const [valueFromBuffer, setValueFromBuffer] = useState<string | null>(null)
  const { value, setValue, submit } = useEditField({ key: stateKey })
  const [initialValue, setInitialValue] = useState('')
  useEffect(() => {
    if (!initialValue) {
      setInitialValue(value)
    }
  }, [value])
  useEffect(() => {
    // if there's a value in the buffer, set it to the value in the buffer
    navigator.clipboard.readText().then(text => {
      setValueFromBuffer(text)
    })
  }, [])
  const isValidImg = useCallback((img: string) => img.includes('.png') || img.includes('.jpg' || img.includes('.jpeg')), [])
  const setDataFromBuffer = useCallback(() => {
    navigator.clipboard.readText().then(text => {
      setValueFromBuffer(text)
      if (text) {
        setValue(text)
      }
    })
  }, [])
  const closeWindow = useCallback(() => {
    // Discard the value and Close window
    setValue(initialValue)
    setWindowsState(windowKey, false)
  }, [initialValue])
  const submitHandler = () => {
    if (isValidImg(value) && value !== initialValue) {
      setInitialValue(value)
      submit()
      setWindowsState(windowKey, false)
    }
  }
  const isAbleToSubmit = useMemo(() => {
    return value && isValidImg(value) && value !== initialValue
  }, [value])
  return {
    value,
    setValue,
    valueFromBuffer,
    setDataFromBuffer,
    closeWindow,
    submitHandler,
    isAbleToSubmit,
  }
}
