import {useEquationStore} from "@/app/utils/store/equationFormStore";
import {shallow} from "zustand/shallow"
import {FC, useLayoutEffect, useState} from "react";
import getEquations from "@/app/utils/tools/EquationGenerator";
import {Modes} from "@/types/export";
import Equation from "@/app/[mathtype]/modes/UI/Equation";
import EquationsWrapper from "@/app/[mathtype]/modes/UI/EquationsWrapper";

interface IProps {
    currentPage: Modes
}

const Mode:FC<IProps> = ({currentPage}) => {
    const [diff, count, trigger] = useEquationStore(state => ([state.diff, state.count, state.flag]) ,shallow)
    const [equations, setEquations] = useState<EquationT[]>()
    useLayoutEffect(() => {
        setEquations(Array.from(getEquations(currentPage, diff, count)))
    }, [diff, count, trigger])

    return (
        <EquationsWrapper>
            {equations && equations.map((eq, i) => {
                const [equation, res] = eq
                return (
                    <Equation key={i} equation={equation} res={res} />
                )
            })}
        </EquationsWrapper>
    );
}
export default Mode;