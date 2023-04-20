import { useEquationStore } from '@/app/utils/store/equationStore'
import AnswerListItem from '@/app/result/components/_components/_components/AnswerListItem'
import { useUserStore } from '@/app/utils/store/globalStore'

const AnswersList = () => {
  const currentUserId = useUserStore(state => state.userId)
  const answers = useEquationStore(state => state.answers)
  return (
    <div className="text-center lg:row-span-2">
      <h3 className="text-2xl font-bold">Time and Correctness </h3>
      <div className="flex flex-col gap-4 w-[90%] mx-auto mt-5">
        {answers && answers.map((ans, i) => <AnswerListItem isTruthy={ans.userId === currentUserId} timeMs={ans.timeMs} key={i} />)}
      </div>
    </div>
  )
}

export default AnswersList
