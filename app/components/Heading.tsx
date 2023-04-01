import { Varela_Round } from 'next/font/google'
import Image from 'next/image'

const h1Font = Varela_Round({
  subsets: ['latin'],
  weight: '400',
})
const Heading = () => {
  return (
    <div className="text-center flex items-center flex-col">
      <Image priority={true} src="/images/yes-purple.png" alt="Logo" width="225" height="225" />
      <h1
        className={`${h1Font.className} text-6xl font-extrabold usm:text-5xl usm:text-[2.9rem] mt-5 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500`}>
        Improve it!
      </h1>
      <div className="mt-1.5 w-full max-w-[300px] h-[5px] bg-gradient-to-l from-purple-500 to-blue-500 rounded-xl"></div>
    </div>
  )
}

export default Heading
