'use client'
import {usePathname} from "next/navigation";
import {useMemo} from "react";
import Image from "next/image";
import ProgressBar from "@/app/components/UI/Global/Stats/ProgressBar";
import { Varela_Round, Ubuntu } from "@next/font/google"

const h1Font = Ubuntu({
    subsets: ["latin"],
    weight: "400"
})

const h2Font = Varela_Round({
    subsets: ["latin"],
    weight: "400"
})

const Page = () => {
    const path = usePathname()
    const userId = useMemo(() => {
        return path && path.split("/").at(-1)
    }, [])
    return (
        <div className="pt-10 pb-10 bg-white block-neo-style min-w-[600px]">
            <div className="w-full h-full px-5">
                <div className="pl-10 flex gap-x-16 min-h-[200px]">
                    <div className="block-neo-style min-w-[200px] bg-[#444444]">
                        <Image className="rounded-xl" src="/images/ayano.jpg" alt="ayano" width="200" height="200" />
                    </div>
                    <div className="block-neo-style min-w-[200px] bg-[#444444] flex-auto mr-10">
                        <div className="p-5 text-center flex flex-col gap-y-5 text-white">
                            <div>
                                <h2 className={`${h1Font.className} text-3xl underline underline-offset-4`}>Ayano</h2>
                            </div>
                            <div>
                                <h2 className={`${h2Font.className} text-2xl pb-2`}>Correct Answers</h2>
                                <ProgressBar correctCount={9.95} count={10}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Page;