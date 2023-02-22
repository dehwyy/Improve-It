import {FC} from "react";

interface IProps {
    children: React.ReactNode
}

const ContentWrapper:FC<IProps> = ({children}) => {
    return (
        <main className="w-[1000px] max-w-full bg-red-300 mx-auto pt-[100px] min-h-screen h-full">
            {children}
        </main>
    );
};

export default ContentWrapper;