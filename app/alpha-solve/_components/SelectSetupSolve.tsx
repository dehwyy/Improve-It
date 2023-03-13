import { useMemo } from 'react'
import SettingItem from '@/app/alpha-solve/_components/SettingItem'
import { Diffs } from '@/types/export'
import { useAlphaEquationGeneratorStore } from '@/app/utils/store/alpha-equationStore'

const SelectSetupSolve = () => {
  const UICustomClasses = useMemo(
    () => [
      'shadow-teal-500/30 text-teal-500',
      'shadow-fuchsia-500/30 text-fuchsia-500',
      'shadow-sky-500/30 text-sky-500',
      'shadow-yellow-500/30 text-yellow-500',
    ],
    []
  )
  const difficulties = useMemo(() => {
    return Object.keys(Diffs).slice(Object.keys(Diffs).length / 2)
  }, [])
  return (
    <div className="sm:flex-col flex gap-5">
      {difficulties.map((mode, i) => (
        <SettingItem mode={mode} customClasses={UICustomClasses[i]} />
      ))}
    </div>
  )
}

export default SelectSetupSolve
