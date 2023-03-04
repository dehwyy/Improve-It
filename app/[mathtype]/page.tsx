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
    <div className="pt-10 w-[80%] sm:w-[92%] mx-auto">
      <div className="bg-white block-neo-style py-5 z-50">
        <ModeSelector currentPage={params.mathtype} />
        <ModeEditor />
      </div>
      <div className="py-5 min-h-[300px] relative">
        <Mode currentPage={params.mathtype} />
      </div>
    </div>
  )
}

export default Page
