'use client'
import { FC, useEffect, useRef } from 'react'

interface IProps {
  count: number
  correctCount: number
}

const ProgressBar: FC<IProps> = ({ correctCount, count }) => {
  const blockCorrectWidth = useRef<HTMLDivElement>(null)
  useEffect(() => {
    if (blockCorrectWidth.current) {
      blockCorrectWidth.current.style.width = `${((correctCount / count) * 100).toFixed(1)}%`
    }
  }, [])
  return (
    <div className={`min-w-[100px] w-full`}>
      <div className={`w-full flex h-full min-h-[20px]`}>
        <div ref={blockCorrectWidth} className={`w-[1px] transition-all duration-1000 bg-green-500`} />
        <div className="flex-auto bg-red-400" />
      </div>
      <div className={`w-full flex justify-between pt-1 text-white`}>
        <div>
          <p>0%</p>
        </div>
        <div>
          <p>100%</p>
        </div>
      </div>
    </div>
  )
}

export default ProgressBar
