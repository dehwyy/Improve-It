import { useEquationStore } from '@/app/utils/store/equationStore'
import { useUserStore } from '@/app/utils/store/globalStore'
import styled from '@emotion/styled'
const Wrapper = styled.div<{ count?: number }>`
  grid-template-columns: repeat(${props => ((props.count || 0) <= 15 ? props.count : '10')}, minmax(0, 26px));
`
const Pages = () => {
  const answers = useEquationStore(state => state.answers)
  return (
    <Wrapper
      count={answers?.length}
      className="mx-auto justify-center grid place-items-center pb-12 gap-1 usm:mt-[-3.5rem] usm:grid-cols-7 usm:pr-16">
      {answers?.map((ans, i) => (
        <Page key={i} page={i} correctUser={ans.userId} />
      ))}
    </Wrapper>
  )
}
// animation
const Page = ({ page, correctUser }: { page: number; correctUser: string | null }) => {
  const currentPage = useEquationStore(state => state.page)
  const currentUserId = useUserStore(state => state.userId)
  return (
    <div
      className={`${
        page < currentPage
          ? currentUserId === correctUser
            ? 'bg-green-500 '
            : 'bg-red-500'
          : page == currentPage
          ? 'bg-violet-500 animate-pulse'
          : 'bg-gray-500'
      } border-2  border-[#222222] hover:animate-pulse rounded-full w-[24px] h-[24px]`}
    />
  )
}

export default Pages
