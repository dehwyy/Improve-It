import {useEquationStore} from "@/app/utils/store/equationFormStore";
import {shallow} from "zustand/shallow"
import {FC, useEffect, useMemo, useState} from "react";
import getEquations from "@/app/utils/tools/EquationGenerator";
import {Modes} from "@/types/export";
import Equation from "@/app/[mathtype]/modes/UI/Equation";

interface IProps {
    currentPage: Modes
}

const SpeedMode:FC<IProps> = ({currentPage}) => {
    const [diff, count, trigger] = useEquationStore(state => ([state.diff, state.count, state.flag]) ,shallow)
    const [equations, setEquations] = useState<EquationT[]>()
    useEffect(() => {
        setEquations(Array.from(getEquations(currentPage, diff, count)))
    }, [diff, count, trigger])
    return (
        <div>
            {equations && equations.map((eq, i) => {
                const [equation, res] = eq
                return (
                    <Equation key={i} equation={equation} res={res} />
                )
            })}
        </div>
    );
}
export default SpeedMode;