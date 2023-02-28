import {useEquationStore} from "@/app/utils/store/equationFormStore";
import {shallow} from "zustand/shallow"
import {FC, useEffect, useMemo, useState} from "react";
import getEquations from "@/app/utils/tools/EquationGenerator";
import {Modes} from "@/types/export";
import Equation from "@/app/[mathtype]/modes/UI/Equation";
import EquationsWrapper from "@/app/[mathtype]/modes/UI/EquationsWrapper";

interface IProps {
    currentPage: Modes
}


const Mode:FC<IProps> = ({currentPage}) => {
    const [diff, count, trigger] = useEquationStore(state => ([state.diff, state.count, state.flag]) ,shallow)
    // const [equations, setEquations] = useState<EquationT[]>()
    const [hasRendered, setRendered] = useState(false)
    useEffect(() => {
        setRendered(true)
    }, [])
    const equations = useMemo(() => Array.from(getEquations(currentPage, diff, count)), [diff, count, trigger])
    if (!hasRendered) return <div></div>
    return equations ? (
        <EquationsWrapper>
            {equations.map((eq, i) => {
                const [equation, res] = eq
                return (
                    <Equation currentPage={currentPage} key={i} equation={equation} res={res} />
                )
            })}
        </EquationsWrapper>
    ) : (
        <div className="text-center" style={{wordSpacing: "7px"}}>
            <span className="text-xl">No implementation yet<br /></span>I would be UwU {`${'if'}`} you decide to help me with making hard equations or maybe something like derivative, integral calculation or trigonometry equations
        </div>
    )
}
export default Mode;