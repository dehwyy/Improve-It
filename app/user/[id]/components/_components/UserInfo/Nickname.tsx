'use client'
import { Mulish } from 'next/font/google'
import ClickAwayListener from '@mui/base/ClickAwayListener'
import { CircularProgress, useMediaQuery } from '@mui/material'
import useNickname from '@/app/utils/hooks/LocalHooks/useNickname'
import useMobile from '@/app/utils/hooks/GlobalHooks/useMobile'
import Button from '@/app/user/[id]/components/_components/UserInfo/__components/Button'
const h2Font = Mulish({
  subsets: ['latin', 'cyrillic'],
  weight: '400',
})

interface IProps {
  name: string
}

const Nickname = ({ name }: IProps) => {
  const { onClickAway, isEditable, isEdit, isValid, isAbleToChange, setNickname, newNickname, submitNickname, toggleEdit } = useNickname(name)
  return (
    <ClickAwayListener onClickAway={onClickAway} mouseEvent="onMouseDown">
      <div className={`flex flex-col pb-5`}>
        <h2
          className={`${h2Font.className} usm:text-[2rem] text-3xl underline underline-offset-4 flex usm:flex-col usm:gap-y-3 justify-center items-center gap-x-1`}>
          {!isEdit ? (
            <span className="p-1">{newNickname}</span>
          ) : (
            <input
              value={newNickname}
              onChange={setNickname}
              className={`${h2Font.className} usm:text-[2rem] text-3xl max-w-[110%] usm:max-w-[140%] p-1 outline-0 rounded-md`}
            />
          )}
          {isEditable && (
            <span onClick={toggleEdit} className="cursor-pointer">
              <EditIcon />
            </span>
          )}
        </h2>
        <Button isValid={isValid} isEdit={isEdit} isAbleToChange={isAbleToChange} submitNickname={submitNickname} />
      </div>
    </ClickAwayListener>
  )
}

const EditIcon = () => (
  <svg height="22px" version="1.1" viewBox="0 0 1696.162 1696.143" width="22px" xmlns="http://www.w3.org/2000/svg">
    <g id="pen">
      <path
        fill="white"
        d="M1648.016,305.367L1390.795,48.149C1359.747,17.098,1318.466,0,1274.555,0c-43.907,0-85.188,17.098-116.236,48.148   L81.585,1124.866c-10.22,10.22-16.808,23.511-18.75,37.833L0.601,1621.186c-2.774,20.448,4.161,41.015,18.753,55.605   c12.473,12.473,29.313,19.352,46.714,19.352c2.952,0,5.923-0.197,8.891-0.601l458.488-62.231   c14.324-1.945,27.615-8.529,37.835-18.752L1648.016,537.844c31.049-31.048,48.146-72.33,48.146-116.237   C1696.162,377.696,1679.064,336.415,1648.016,305.367z M493.598,1505.366l-350.381,47.558l47.56-350.376L953.78,439.557   l302.818,302.819L493.598,1505.366z M1554.575,444.404l-204.536,204.533l-302.821-302.818l204.535-204.532   c8.22-8.218,17.814-9.446,22.802-9.446c4.988,0,14.582,1.228,22.803,9.446l257.221,257.218c8.217,8.217,9.443,17.812,9.443,22.799   S1562.795,436.186,1554.575,444.404z"
      />
    </g>
  </svg>
)

export default Nickname