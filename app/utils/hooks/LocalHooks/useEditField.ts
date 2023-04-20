import { UserChangeableValues, useUserEditorStore } from '@/app/utils/store/editUserInfoStore'
import { useUserStore } from '@/app/utils/store/globalStore'
import { shallow } from 'zustand/shallow'
import { useDebounce } from 'usehooks-ts'
import useSWR from 'swr'
import { ApiRoutesUser } from '@/types/routes'
import getFetcher from '@/app/utils/global/getFetcher'
import { useCallback, useMemo } from 'react'

interface IArgs {
  key: keyof UserChangeableValues<string>
  apiRoute?: ApiRoutesUser
}

export default function useEditField({ key, apiRoute }: IArgs) {
  const id = useUserStore(state => state.userId) as string
  const [submitField, fieldsValues, setFieldsValues, initialValues, getIsValidFields] = useUserEditorStore(
    state => [state.submitFields, state.fieldsValues, state.setFieldsValues, state.initialValues, state.getIsValidFields],
    shallow
  )
  const debouncedValue = useDebounce(fieldsValues[key], 500)
  const { data, isLoading } = useSWR(`${apiRoute}/${debouncedValue}`, getFetcher<string>())
  const { isValidMainField, isNotShowingText, isShowingLoader } = useMemo(
    () => ({
      isValidMainField: getIsValidFields({ anyValue: data, key }),
      isShowingLoader: (debouncedValue != fieldsValues[key] || isLoading) && !(fieldsValues[key] == initialValues[key]),
      isNotShowingText: debouncedValue != fieldsValues[key] || fieldsValues[key] == initialValues[key] || isLoading,
    }),
    [data, debouncedValue, fieldsValues[key], isLoading, initialValues]
  )
  const setFieldValue = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setFieldsValues(e.target.value, key), [])
  const submit = useCallback(() => submitField({ id, key: key, anyValue: data }), [])
  return {
    value: fieldsValues[key],
    setValue: setFieldValue,
    isValidMainField,
    isNotShowingText,
    isShowingLoader,
    submit,
  }
}
