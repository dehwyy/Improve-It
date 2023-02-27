'use client'
import ModeSelector from "@/app/[mathtype]/modes/Form/ModeSelector";
import HardMode from "@/app/[mathtype]/modes/HardMode";
import SpeedMode from "@/app/[mathtype]/modes/SpeedMode";
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
            <div className="bg-custom-blue mt-5 rounded-2xl p-5">
                {params.mathtype === Modes.hard
                    ? <HardMode  currentPage={params.mathtype}/>
                    : <SpeedMode  currentPage={params.mathtype}/>
                }
            </div>

        </div>
    );
};

export default Page;