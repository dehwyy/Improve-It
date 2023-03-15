import { useAlphaEquationStore } from '@/app/utils/store/alpha-equationStore'
import { useRouter } from 'next/navigation'
import { useLayoutEffect, useMemo } from 'react'
import AnswerListItem from '@/app/alpha-result/components/_components/_components/AnswerListItem'

const AnswersList = () => {
  const router = useRouter()
  const answers = useAlphaEquationStore(state => state.answers)
  useLayoutEffect(() => {
    if (!answers) router.push('/testingSolve/plusminus')
  }, [])
  return (
    <div className="w-1/3 text-center ">
      <h3 className="text-2xl font-bold">Time and Correctness </h3>
      <div className="flex flex-col gap-4 w-[90%] mx-auto mt-5">
        {answers && answers.map((ans, i) => <AnswerListItem isTruthy={ans.isTruthy} timeMs={ans.timeMs} key={i} />)}
      </div>
    </div>
  )
}

export default AnswersList
