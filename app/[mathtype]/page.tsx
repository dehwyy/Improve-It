'use client'
import ModeSelector from "@/app/components/UI/Items/ModeSelector";
import HardMode from "../components/modes/HardMode";
import SpeedMode from "../components/modes/SpeedMode";
import {FC} from "react";
import ModeEditor from "../components/UI/Items/ModeEditor";

interface IProps {
    params: {
        mathtype: "hard" | "speed"
    }
}


const Page:FC<IProps> = ({params}) => {
    return (
        <div className="pt-10 w-[80%] mx-auto">
            <div className="bg-custom-blue py-5 rounded-2xl">
                <ModeSelector currentPage={params.mathtype} />
                <ModeEditor  />
            </div>
            <div className="bg-custom-blue mt-5 rounded-2xl p-5">
                {params.mathtype === "hard"
                    ? <HardMode  />
                    : <SpeedMode  />
                }
            </div>
            
        </div>
    );
};

export default Page;