import { Varela_Round } from '@next/font/google'

const h1Font = Varela_Round({
  subsets: ['latin'],
  weight: '400',
})
const Heading = () => {
  return (
    <div className="text-center flex items-center flex-col">
      <h1 className={`${h1Font.className} text-7xl uusm:text-6xl text-white`}>Solve It!</h1>
      <div className="mt-1.5 w-[275px] max-w-screen  h-[5px] bg-gradient-to-r from-white to-custom-light-blue rounded-xl"></div>
    </div>
  )
}

export default Heading
