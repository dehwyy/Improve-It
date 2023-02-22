import {FC} from "react";
import Link from "next/link";

interface IProps {
    currentPage: string
}

const chooseOptions = [
    {content: "Speeeed", href: "speed"},
    {content: "Harddd", href: "hard"},
]

const ModeSelector:FC<IProps> = ({currentPage}) => {
    return (
        <div className="max-w-screen w-3/5 flex-auto bg-white flex mx-auto gap-x-4 p-3 px-5 rounded-xl">
            {chooseOptions.map((option, i ) => (
                <Link href={option.href} key={i} className="flex-auto ">
                    <div className={(currentPage === option.href && "bg-custom-light-blue ") + "select-none text-xl bg-custom-pale-blue px-5 py-2 rounded-xl border-sky-400 border-2 cursor-pointer text-center"}>
                        {option.content}
                    </div>
                </Link>
            ))}
        </div>
    );
};

export default ModeSelector;