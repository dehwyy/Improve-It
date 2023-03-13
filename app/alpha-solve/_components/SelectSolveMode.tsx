import { AlphaModes } from '@/types/alpha-export'
import { useMemo } from 'react'
import SettingItem from '@/app/alpha-solve/_components/SettingItem'

const SelectSolveMode = () => {
  const UICustomClasses = useMemo(
    () => ['shadow-red-500/30 text-red-500', 'shadow-blue-500/30 text-blue-500', 'shadow-green-500/30 text-green-500'],
    []
  )
  return (
    <div className="sm:flex-col flex gap-5">
      {Object.values(AlphaModes).map((mode, i) => (
        <SettingItem mode={mode} customClasses={UICustomClasses[i]} />
      ))}
    </div>
  )
}

export default SelectSolveMode
