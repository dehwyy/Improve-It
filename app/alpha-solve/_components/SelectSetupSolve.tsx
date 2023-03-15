import { useMemo } from 'react'
import SettingItem from '@/app/alpha-solve/_components/_components/SettingItem'
import { useAlphaEquationGeneratorStore } from '@/app/utils/store/alpha-equationStore'
import { shallow } from 'zustand/shallow'
import { AlphaDifficulties } from '@/types/alpha-export'

const SelectSetupSolve = () => {
  const [currentDifficulty, currentCount, editStore] = useAlphaEquationGeneratorStore(
    state => [state.difficulty, state.count, state.setEquationSettings],
    shallow
  )
  const UICustomDifficulty = useMemo(
    () => [
      'shadow-fuchsia-500/30 text-fuchsia-500',
      'shadow-fuchsia-500/30 text-fuchsia-500',
      'shadow-fuchsia-500/30 text-fuchsia-500',
      'shadow-fuchsia-500/30 text-fuchsia-500',
    ],
    []
  )
  const UICustomCount = useMemo(() => 'shadow-sky-500/30 text-sky-500', [])
  const difficulties = useMemo(() => {
    return Object.keys(AlphaDifficulties) as Array<AlphaDifficulties>
  }, [])
  const availableCount = useMemo(() => {
    return [5, 10, 15, 20, 30]
  }, [])
  return (
    <>
      <h2 className="text-center text-5xl text-white font-extrabold pb-7 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500">
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
            customClasses={UICustomDifficulty[i]}
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
            customClasses={UICustomCount}
          />
        ))}
      </div>
    </>
  )
}

export default SelectSetupSolve
