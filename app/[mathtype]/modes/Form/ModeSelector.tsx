import { FC } from "react";
import Link from "next/link";
import {Modes} from "@/types/export";

interface IProps {
    currentPage: Modes
}

const chooseOptions = [
    { content: "Speeeed", href: "speed" },
    { content: "Harddd", href: "hard" },
]

const ModeSelector: FC<IProps> = ({ currentPage }) => {
    return (
        <div className="max-w-screen w-[50%] mx-auto flex-auto flex gap-x-0.5 p-0.5 rounded select-none">
            {chooseOptions.map((option, i) => (
                <Link href={option.href} key={i} className="flex-auto ">
                    <div className={(currentPage === option.href && "bg-sky-400 ") + "select-none text-xl bg-custom-light-blue px-5 py-2 rounded border-black border-2 cursor-pointer text-center"}>
                        {option.content}
                    </div>
                </Link>
            ))}
        </div>
    );
};



export default ModeSelector;