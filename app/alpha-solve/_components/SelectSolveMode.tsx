import { AlphaModes } from '@/types/alpha-export'
import { useMemo } from 'react'
import SettingItem from '@/app/alpha-solve/_components/SettingItem'
import { useAlphaEquationGeneratorStore } from '@/app/utils/store/alpha-equationStore'
import { shallow } from 'zustand/shallow'

const SelectSolveMode = () => {
  const [currentMode, editStore] = useAlphaEquationGeneratorStore(state => [state.mode, state.setEquationSettings], shallow)
  const UICustomClasses = useMemo(
    () => ['shadow-yellow-500/30 text-yellow-500', 'shadow-blue-500/30 text-blue-500', 'shadow-green-500/30 text-green-500'],
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
