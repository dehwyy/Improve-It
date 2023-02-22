import {FC} from "react";
import "./global.css"
import Navbar from "@/app/components/Navbar";
import AppWrapper from "@/app/components/UI/Wrappers/AppWrapper";
import ContentWrapper from "@/app/components/UI/Wrappers/ContentWrapper";
interface IProps {
    children: React.ReactNode
}
const Layout:FC<IProps> = ({children}) => {
    return (
        <html lang="en">
            <head />
            <body className="w-full h-full min-h-screen min-w-full">
                <AppWrapper>
                    <Navbar />
                    <ContentWrapper>
                        {children}
                    </ContentWrapper>
                </AppWrapper>
            </body>
        </html>
    )
}

export default Layout