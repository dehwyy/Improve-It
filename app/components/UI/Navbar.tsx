'use client'
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import DehazeIcon from '@mui/icons-material/Dehaze';
import Link from "next/link";
import Home from '@mui/icons-material/HomeOutlined';
import {useRef} from "react";
import {CSSTransition} from "react-transition-group";
import {useNavbarStore} from "@/app/utils/store/componentsStore";
import {shallow} from "zustand/shallow";

// Timer on this navbar

const Navbar = () => {
    const [isExpanded, setExpanded] = useNavbarStore(state => [state.isOpened, state.setIsOpen], shallow)
    const nodeRef = useRef(null)
    return (
        <nav className="fixed right-0 top-0 select-none h-[100px] z-50">
            <div className="absolute right-0 flex justify-center">
            </div>
            <CSSTransition
                in={isExpanded}
                nodeRef={nodeRef}
                timeout={1500}
                classNames="navbar">
                <div ref={nodeRef} className={(isExpanded? "w-screen visible " : "w-48 rounded-bl-3xl border-l-4") + " h-[100px] bg-white border-b-4 border-black flex items-center "}>
                    <div className={(isExpanded ? "gap-x-8 " : " ") + "gap-x-0 flex pl-10 transition-all duration-[1500ms]"}>
                        <Link href="/">
                            <Home sx={{cursor: "pointer"}} fontSize="large" />
                        </Link>
                        <Link href="/user/1">
                            <PermIdentityIcon sx={{cursor: "pointer"}} fontSize="large"/>
                        </Link>
                        <DehazeIcon sx={{cursor: "pointer"}} fontSize="large" onClick={() => setExpanded()}/>
                        </div>
                    </div>
            </CSSTransition>
        </nav>
    );
};

export default Navbar;