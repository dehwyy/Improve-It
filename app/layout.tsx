import {FC} from "react";
import "./global.css"
import Navbar from "@/app/components/Navbar";
import AppWrapper from "@/app/components/AppWrapper";
interface IProps {
    children: React.ReactNode
}
const Layout:FC<IProps> = ({children}) => {
    return (
        <html lang="en">
            <head />
            <body>
                <AppWrapper>
                    <Navbar />
                    {children}
                </AppWrapper>
            </body>
        </html>
    )
}

export default Layout