import { AlphaModes } from '@/types/alpha-export'
import { useMemo } from 'react'
import SettingItem from '@/app/solve/_components/_components/SettingItem'
import { useEquationSettingsStore } from '@/app/utils/store/equationStore'
import { shallow } from 'zustand/shallow'

const SelectSolveMode = () => {
  const [currentMode, editStore] = useEquationSettingsStore(state => [state.mode, state.setEquationSettings], shallow)
  const UICustomClasses = useMemo(
    () => ['shadow-sky-500 text-sky-500', 'shadow-violet-500 text-violet-500', 'shadow-custom-green text-custom-green'],
    []
  )
  return (
    <>
      <h2 className="text-center text-5xl text-white font-extrabold pb-7">Select Mode</h2>
      <div className="sm:flex-col flex gap-5">
        {Object.values(AlphaModes).map((mode, i) => (
          <SettingItem key={i} onClick={() => editStore({ mode })} isActive={mode === currentMode} mode={mode} customClasses={UICustomClasses[i]} />
        ))}
      </div>
    </>
  )
}

export default SelectSolveMode
