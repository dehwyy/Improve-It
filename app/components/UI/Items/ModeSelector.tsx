//@ts-nocheck
import { FC } from "react";
import Link from "next/link";

interface IProps {
    currentPage: string
}

const chooseOptions = [
    { content: "Speeeed", href: "speed" },
    { content: "Harddd", href: "hard" },
]

const ModeSelector: FC<IProps> = ({ currentPage }) => {
    return (
        <div className="max-w-screen w-[50%] mx-auto flex-auto bg-white flex gap-x-0.5 p-0.5 rounded">
            {chooseOptions.map((option, i) => (
                <Link href={option.href} key={i} className="flex-auto ">
                    <div className={(currentPage === option.href && "bg-red-700 ") + "select-none text-xl bg-custom-pale-blue px-5 py-2 rounded border-sky-400 border-2 cursor-pointer text-center"}>
                        {option.content}
                    </div>
                </Link>
            ))}
        </div>
    );
};



export default ModeSelector;