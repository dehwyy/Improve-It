import ModeSelector from '@/app/[mathtype]/modes/Form/ModeSelector'
import Mode from '@/app/[mathtype]/modes/Mode'
import type { FC } from 'react'
import ModeEditor from '@/app/[mathtype]/modes/Form/ModeEditor'
import { Modes } from '@/types/export'
interface IProps {
  params: {
    mathtype: Modes
  }
}

const Page: FC<IProps> = ({ params }) => {
  return (
    <div className="pt-10 w-[80%] mx-auto">
      <div className="bg-white block-neo-style py-5">
        <ModeSelector currentPage={params.mathtype} />
        <ModeEditor />
      </div>
      <div className="bg-white block-neo-style mt-5 p-5 min-h-[300px]">
        <Mode currentPage={params.mathtype} />
      </div>
    </div>
  )
}

export default Page
