'use client'
import AlphaDefaultPageWrapper from '@/app/components/UI/Wrappers/_AlphaDefaultPageWrapper'

const Page = () => {
  return (
    <AlphaDefaultPageWrapper className="mt-12 shadow-red-500/100 text-red-500 border-current">
      <h2 className="font-extrabold text-4xl">List of Unimplemented Equations:</h2>
      <ul className="text-2xl opacity-80 text-left mt-5 font-bold" style={{ listStyle: 'inside' }}>
        <li>Variable equation - Hard</li>
        <li> Variable equation - Impossible</li>
      </ul>
    </AlphaDefaultPageWrapper>
  )
}

export default Page
