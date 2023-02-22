import ModeSelector from "@/app/components/UI/Items/ModeSelector";
import {FC} from "react";

interface IProps {
    params: {
        mathtype: "hard" | "string"
    }
}


const Page:FC<IProps> = ({params}) => {
    return (
        <div className="pt-10">
            <ModeSelector currentPage={params.mathtype}/>
        </div>
    );
};

export default Page;