import { Varela_Round } from '@next/font/google'
import Link from 'next/link'
import GuideWrapper from '@/app/develop/guides/components/GuideWrapper'

const h13Font = Varela_Round({
  subsets: ['latin'],
  weight: '400',
})
const Page = () => {
  return (
    <GuideWrapper>
      <h1 className={`${h13Font.className} text-center text-7xl uusm:text-6xl text-white vsm:text-[2.85rem] uusm:text-4xl`}>For developers</h1>
      <div className="flex-auto flex flex-col gap-y-5 mt-5 text-white text-2xl">
        <p>
          Work on this website is still continuing, I'll be glad of any help. SolveDir is extensible, so you can create your own {'<EquationKind>'}
          (used to call it like so). This is a short{' '}
          <Link href="/develop/guides/createKind" className="text-blue-400">
            guide
          </Link>{' '}
          how to do it.
        </p>
        <h3 className={`${h13Font.className} text-center text-4xl`}>All guides</h3>
        <ol className="mt-5" style={{ listStyle: 'inside' }}>
          <li className="mb-2">
            <Link href="/develop/guides/createKind" className="text-blue-400">
              How to create custom EquationKind
            </Link>
          </li>
          <li>
            <Link href="/develop/guides/createHelper" className="text-blue-400">
              How to create custom EquationHelper
            </Link>
          </li>
        </ol>
      </div>
    </GuideWrapper>
  )
}

export default Page
