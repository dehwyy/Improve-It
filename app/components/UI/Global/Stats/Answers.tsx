import { FC } from 'react'
import { Ubuntu } from '@next/font/google'

const pFont = Ubuntu({
  subsets: ['latin'],
  weight: '400',
})

interface IProps {
  count: number
  correctCount: number
}

const Answers: FC<IProps> = ({ correctCount, count }) => {
  return (
    <div className={`min-w-[200px] text-left w-full text-xl text-white w-min`}>
      <p className={`${pFont.className}`}>
        Correct answers:&nbsp;<span className="text-green-400">{correctCount}</span>
      </p>
      <p className={pFont.className}>
        Wrong answers:&nbsp;<span className="text-red-400 pl-[8px]">{count - correctCount}</span>
      </p>
    </div>
  )
}

export default Answers
