import {FC} from "react";

interface IProps {
    children: React.ReactNode
}

const AppWrapper:FC<IProps> = ({children}) => {
    return (
        <div>
            {children}
        </div>
    );
};

export default AppWrapper;