import {FC} from "react";

interface IProps {
    children: React.ReactNode
}

const EquationsWrapper:FC<IProps> = ({children}) => {
    return (
        <div className={`p-5 grid grid-cols-2`}>
            {children}
        </div>
    );
};

export default EquationsWrapper;