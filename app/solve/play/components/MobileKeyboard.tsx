import { useMemo } from 'react'
import KeyboardNumber from '@/app/solve/play/components/components/KeyboardNumber'
import Back from '@/public/svg/back'
import useNumberAndMobileKeyboard from '@/app/utils/hooks/GlobalHooks/useNumberAndMobileKeyboard'
import useEquationKeyboard from '@/app/utils/hooks/EquationHooks/useEquationKeyboard'
import MobileEnterButton from '@/app/solve/play/components/components/MobileEnterButton'
import useMobile from '@/app/utils/hooks/GlobalHooks/useMobile'
import { useGameTypeStore } from '@/app/utils/store/gameTypeStore'

interface IProps {
  isAnimation: boolean
}

const MobileKeyboard = ({ isAnimation }: IProps) => {
  const nums = useMemo(() => Array.from({ length: 9 }, (_, i) => i + 1), [])
  const { isMobile } = useMobile()
  const gameType = useGameTypeStore(state => state.gameType)
  return !isAnimation ? (
    <div className="hidden sm:block">
      <div className="grid grid-cols-3 place-content-center gap-y-5 gap-x-3 w-[80%] mx-auto">
        {nums.map((n, i) => (
          <KeyboardNumber key={i} n={n} />
        ))}
        <KeyboardNumber n={'-'} />
        <KeyboardNumber n={0} />
        <KeyboardNumber n={<Back />} isReactNode={true} />
        {isMobile && gameType == 'Solo' && <MobileEnterButton />}
      </div>
    </div>
  ) : (
    <></>
  )
}

export default MobileKeyboard
