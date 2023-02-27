import type {FC} from "react";

interface IProps {
    equation: string
    res: number
}

const Equation:FC<IProps> = ({equation, res}) => {
    return (
        <div>
            <pre>{String(res)} {String(equation)}</pre>
        </div>
    );
};

export default Equation