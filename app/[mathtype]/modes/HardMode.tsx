import {FC} from "react";
import {Modes} from "@/types/export";

interface IProps {
    currentPage: Modes
}

const HardMode:FC<IProps> = ({currentPage}) => {
    return (
        <div>
            123
        </div>
    );
}

export default HardMode;