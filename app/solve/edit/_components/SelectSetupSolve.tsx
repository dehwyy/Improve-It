import { useMemo } from 'react'
import SettingItem from '@/app/solve/edit/_components/__components/SettingItem'
import { useEquationSettingsStore } from '@/app/utils/store/equationStore'
import { shallow } from 'zustand/shallow'
import { Difficulties } from '../../../../types/export'

const SelectSetupSolve = () => {
  const [currentDifficulty, currentCount, editStore] = useEquationSettingsStore(
    state => [state.difficulty, state.count, state.setEquationSettings],
    shallow
  )
  const difficulties = useMemo(() => {
    return Object.keys(Difficulties) as Array<Difficulties>
  }, [])
  const availableCount = useMemo(() => {
    return [5, 10, 15, 20, 30]
  }, [])
  return (
    <>
      <h2 className="text-center text-5xl font-extrabold pb-7 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500">
        Mode Settings
      </h2>
      <h3 className="text-center text-3xl opacity-80 text-white font-bold pb-4">Difficulty</h3>
      <div className="sm:flex-col flex gap-5">
        {difficulties.map((difficulty, i) => (
          <SettingItem
            key={i}
            onClick={() => editStore({ difficulty })}
            isActive={difficulty === currentDifficulty}
            mode={String(difficulty)}
            customClasses={'shadow-fuchsia-500/70 text-fuchsia-500'}
          />
        ))}
      </div>
      <h3 className="text-center text-3xl opacity-80 text-white font-bold pt-12 pb-4">Count</h3>
      <div className="sm:flex-col flex gap-5">
        {availableCount.map((count, i) => (
          <SettingItem
            key={i}
            onClick={() => editStore({ count })}
            isActive={currentCount === count}
            mode={String(count)}
            customClasses={'shadow-sky-500/70 text-sky-500'}
          />
        ))}
      </div>
    </>
  )
}

export default SelectSetupSolve
