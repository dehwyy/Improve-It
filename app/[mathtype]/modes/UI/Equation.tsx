import type {FC} from "react";
import {useCallback, useEffect, useState} from "react";
import {Button} from "@mui/material";
import {useEquationStore} from "@/app/utils/store/equationFormStore";

interface IProps {
    equation: string
    res: number
}

const Equation:FC<IProps> = ({equation, res}) => {
    const [isShowed, setShowed] = useState(false)
    const [isTruthy, setTruthy] = useState<null | boolean>(null)
    const [bgColor, setBgColor] = useState<"bg-white" | "bg-red-400" | "bg-green-500">("bg-white")
    const [isShowButtons, setShowButtons] = useState(true)
    const flag = useEquationStore(state => state.flag)

    useEffect(() => {
        setTruthy(null)
        setShowed(false)
    }, [flag])

    useEffect(() => {
      switch (isTruthy) {
          case null:
              setBgColor("bg-white")
              break
          case true:
              setBgColor("bg-green-500")
              break
          case false:
              setBgColor("bg-red-400")
      }
    }, [isTruthy])

    const setShow = () => {
        setShowed(p => !p)
        setShowButtons(true)
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
        <div className="my-2 flex gap-x-1 items-center h-[50px]">
            <div className="pr-1">
                <div className={`border-2 border-black rounded-full w-[15px] h-[15px] ${bgColor}`}></div>
            </div>
            <div className="select-none h-min cursor-pointer font-[600]" onClick={setShow}>{equation}</div>
            {isShowed &&
                <div className="select-none flex items-center gap-x-3">
                    <div className="cursor-pointer font-[700]" onClick={() => setShowButtons(true)}>{res}</div>
                    {isShowButtons && <>
                        <Button onClick={handleErrorButton} color="error" size="small" variant="contained">❌</Button>
                        <Button onClick={handleSuccessButton} color="success" size="small" variant="contained">✔️</Button>
                    </>}
                    </div>}
        </div>
    );
};

export default Equation