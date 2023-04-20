'use client'
import useEditField from '@/app/utils/hooks/LocalHooks/useEditField'

const Description = () => {
  const { value, setValue, submit } = useEditField({ key: 'description' })
  return (
    <div className="flex flex-col gap-3">
      <textarea
        value={value}
        onChange={setValue}
        placeholder="Share something about yourself"
        rows={3}
        maxLength={65}
        style={{ resize: 'none' }}
        className="!outline-0 mt-4 w-4/5 sm:w-[98%] p-2 rounded-xl mx-auto"
      />
      <span onClick={submit} className={`cursor-pointer p-1 select-none text-blue-500 text-2xl text-center`}>
        Save
      </span>
    </div>
  )
}

export default Description
