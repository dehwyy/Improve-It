import { useMemo } from 'react'
import KeyboardNumber from '@/app/solve/play/components/components/KeyboardNumber'
import Back from '@/public/svg/back'

interface IProps {
  isAnimation: boolean
}

const MobileKeyboard = ({ isAnimation }: IProps) => {
  const nums = useMemo(() => Array.from({ length: 9 }, (_, i) => i + 1), [])
  return !isAnimation ? (
    <div className="invisible opacity-0 sm:opacity-100 sm:visible">
      <div className="grid grid-cols-3 place-content-center gap-3">
        {nums.map((n, i) => (
          <KeyboardNumber key={i} n={n} />
        ))}
        <KeyboardNumber n={'-'} />
        <KeyboardNumber n={0} />
        <KeyboardNumber n={<Back />} isReactNode={true} />
      </div>
    </div>
  ) : (
    <></>
  )
}

export default MobileKeyboard
