'use client'
import ModeSelector from "@/app/[mathtype]/modes/Form/ModeSelector";
import Mode from "@/app/[mathtype]/modes/Mode";
import type {FC} from "react";
import ModeEditor from "@/app/[mathtype]/modes/Form/ModeEditor";
import {Modes} from "@/types/export"
interface IProps {
    params: {
        mathtype: Modes
    }
}


const Page:FC<IProps> = ({params}) => {
    return (
        <div className="pt-10 w-[80%] mx-auto">
            <div className="bg-custom-blue py-5 rounded-2xl">
                <ModeSelector currentPage={params.mathtype} />
                <ModeEditor  />
            </div>
            <div className="bg-custom-blue mt-5 rounded-2xl p-5 min-h-[300px]">
                <Mode currentPage={params.mathtype}/>
            </div>

        </div>
    );
};

export default Page;