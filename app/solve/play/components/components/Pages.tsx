import { useEquationStore } from '@/app/utils/store/equationStore'
import { useUserStore } from '@/app/utils/store/globalStore'
import styled from '@emotion/styled'

const PagesWrapper = styled.div`
  margin: 0 auto;
  justify-content: center;
  display: grid;
  place-items: center;
  grid-template-columns: repeat(10, minmax(0, 26px));
  padding-bottom: 3rem;
  gap: 1.25rem;
`

const Pages = () => {
  const answers = useEquationStore(state => state.answers)
  return (
    <PagesWrapper>
      {answers?.map((ans, i) => (
        <Page key={i} page={i} correctUser={ans.userId} />
      ))}
    </PagesWrapper>
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
          ? currentUserId == correctUser
            ? 'bg-green-500 '
            : 'bg-red-500'
          : page == currentPage
          ? 'bg-violet-500 animate-pulse'
          : 'bg-gray-500'
      } border-2 border-[#222222] hover:animate-pulse rounded-full w-[26px] h-[26px]`}
    />
  )
}

export default Pages
