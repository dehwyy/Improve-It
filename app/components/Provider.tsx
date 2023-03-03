"use client"
import {FC} from "react";
import {SessionProvider} from "next-auth/react";

interface IProps {
    children: React.ReactNode
}
const Provider:FC<IProps> = ({children}) => {
    return (
        <SessionProvider>
            {children}
        </SessionProvider>
    );
};

export default Provider;