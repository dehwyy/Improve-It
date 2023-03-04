import type { FC } from 'react'
import { memo, useCallback, useEffect, useState } from 'react'
import { Button } from '@mui/material'
import { useEquationStore, useSingleEquationStore } from '@/app/utils/store/equationStore'
import { Modes } from '@/types/export'
import { shallow } from 'zustand/shallow'
import { useEquationResultsStore } from '@/app/utils/store/equationStore'

interface IProps {
  equation: string
  res: number
  index: number
  currentPage: Modes
  isActiveEquation: boolean
}

const Equation: FC<IProps> = ({ equation, res, currentPage, index, isActiveEquation }) => {
  const [isShowed, setShowed] = useState(false)
  const [isTruthy, setTruthy] = useState<null | boolean>(null)
  const [bgColor, setBgColor] = useState<'bg-white' | 'bg-red-500' | 'bg-green-500'>('bg-white')
  const [isShowButtons, setShowButtons] = useState(true)

  const [flag, count, diff] = useEquationStore(state => [state.trigger, state.count, state.diff], shallow)
  const [addAns, addCorrAns, remCorrAns] = useEquationResultsStore(
    state => [state.addAnsweredCount, state.addCorrectlyAnsweredCount, state.removeCorrectlyAnsweredCount],
    shallow
  )
  const setActiveEquation = useSingleEquationStore(state => state.setActiveEquation)
  useEffect(() => {
    setTruthy(null)
    setShowed(false)
  }, [flag, count, diff])
  useEffect(() => {
    switch (isTruthy) {
      case null:
        setBgColor('bg-white')
        break
      case true:
        if (bgColor === 'bg-white') {
          // checks if bg was white => choice haven't been made
          addAns()
          addCorrAns()
        } else {
          addCorrAns()
        }
        setBgColor('bg-green-500')
        break
      case false:
        if (bgColor == 'bg-white') {
          // checks if bg was white => choice haven't been made
          addAns()
        } else {
          remCorrAns()
        }
        setBgColor('bg-red-500')
    }
  }, [isTruthy])

  const setShow = () => {
    setShowed(true)
    setShowButtons(true)
    setActiveEquation(index)
  }

  const handleErrorButton = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation()
    setTruthy(false)
    setShowButtons(false)
  }, [])

  const handleSuccessButton = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation()
    setTruthy(true)
    setShowButtons(false)
  }, [])

  return (
    <div className="my-2 flex gap-1 items-center h-[50px] sm:flex-col sm:gap-2 sm:h-[65px] text-[14px]">
      <div className="my-2 flex gap-1 items-center h-[50px]">
        <div className="pr-1">
          <div className={`border-2 border-black rounded-full w-[15px] h-[15px] ${bgColor}`}></div>
        </div>
        <div className="select-none h-min cursor-pointer font-[600]" onClick={setShow}>
          {equation}
        </div>
        {isShowed && (
          <div
            className="cursor-pointer font-[700]"
            onClick={() => {
              setActiveEquation(index)
              setShowButtons(true)
            }}>
            {currentPage === 'speed' ? res : `| x equals ${res}`}
          </div>
        )}
      </div>
      <div>
        {isActiveEquation && isShowed && (
          <div className="select-none flex items-center gap-x-3">
            {isShowButtons && (
              <>
                <Button onClick={handleErrorButton} color="error" size="small" variant="contained">
                  ❌
                </Button>
                <Button onClick={handleSuccessButton} color="success" size="small" variant="contained">
                  ✔️
                </Button>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

export default memo(Equation)
