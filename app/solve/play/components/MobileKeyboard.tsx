import { useMemo } from 'react'
import KeyboardNumber from '@/app/solve/play/components/components/KeyboardNumber'
import Back from '@/public/svg/back'

interface IProps {
  isAnimation: boolean
}

const MobileKeyboard = ({ isAnimation }: IProps) => {
  const nums = useMemo(() => Array.from({ length: 9 }, (_, i) => i + 1), [])
  return !isAnimation ? (
    <div className="hidden sm:block">
      <div className="grid grid-cols-3 place-content-center gap-y-5 gap-x-3 w-[80%] mx-auto">
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
