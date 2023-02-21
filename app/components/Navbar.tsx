'use client'
import Image from "next/image";
import cloud from "../../public/cloud.png"
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import DehazeIcon from '@mui/icons-material/Dehaze';
import Link from "next/link";
import Home from '@mui/icons-material/HomeOutlined';
import {useState} from "react";
const Navbar = () => {
    return (
        <div className="fixed right-0 top-0 select-none h-[100px] ">
            <Image src={cloud} alt={"Navbar"} width={200} height={200}/>
            <div className="absolute top-6 right-6 flex justify-center">
                    <div className="flex gap-x-3">
                        <Link href="/">
                            <Home sx={{cursor: "pointer"}} fontSize="large" />
                        </Link>
                        <Link href="/user/1">
                            <PermIdentityIcon sx={{cursor: "pointer"}} fontSize="large"/>
                        </Link>
                        <DehazeIcon sx={{cursor: "pointer"}} fontSize="large" />
                    </div>
            </div>
        </div>
    );
};

export default Navbar;