import { useMemo } from 'react'
import SettingItem from '@/app/solve/edit/_components/__components/SettingItem'
import { useEquationSettingsStore } from '@/app/utils/store/equationStore'
import { shallow } from 'zustand/shallow'
import { Modes } from '@/types/export'

const SelectSolveMode = () => {
  const [currentMode, editStore] = useEquationSettingsStore(state => [state.mode, state.setEquationSettings], shallow)
  const UICustomClasses = useMemo(
    () => ['shadow-sky-500/70 text-sky-500', 'shadow-violet-500/70 text-violet-500', 'shadow-custom-green/70 text-custom-green'],
    []
  )
  return (
    <>
      <h2 className="text-center text-5xl text-white font-extrabold pb-7">Select Mode</h2>
      <div className="sm:flex-col flex gap-5">
        {Object.values(Modes).map((mode, i) => (
          <SettingItem key={i} onClick={() => editStore({ mode })} isActive={mode === currentMode} mode={mode} customClasses={UICustomClasses[i]} />
        ))}
      </div>
    </>
  )
}

export default SelectSolveMode
