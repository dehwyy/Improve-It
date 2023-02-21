'use client'
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import DehazeIcon from '@mui/icons-material/Dehaze';
import Link from "next/link";
import Home from '@mui/icons-material/HomeOutlined';
import {useState, useRef} from "react";
import {CSSTransition} from "react-transition-group";
const Navbar = () => {
    const [isExpanded, setExpanded] = useState(false)
    const nodeRef = useRef(null)
    return (
        <div className="fixed right-0 top-0 select-none h-[100px]">
            <div className="absolute right-0 flex justify-center z-50">
                    <div className="flex gap-x-3 bg-custom-blue p-[32.5px]">
                        <Link href="/">
                            <Home sx={{cursor: "pointer"}} fontSize="large" />
                        </Link>
                        <Link href="/user/1">
                            <PermIdentityIcon sx={{cursor: "pointer"}} fontSize="large"/>
                        </Link>
                        <DehazeIcon sx={{cursor: "pointer"}} fontSize="large" onClick={() => setExpanded(p => !p)}/>
                    </div>
            </div>
            <CSSTransition
                in={isExpanded}
                nodeRef={nodeRef}
                timeout={1000}
                classNames="navbar">
                <div ref={nodeRef} className={(isExpanded? "w-screen visible" : "w-0") + " h-[100px] bg-custom-blue"}>123</div>
            </CSSTransition>
        </div>
    );
};

export default Navbar;