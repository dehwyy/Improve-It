import Link from 'next/link'
import { Varela_Round } from '@next/font/google'
import CustomButton from '@/app/components/UI/Global/CustomButton'

const h1Font = Varela_Round({
  subsets: ['latin'],
  weight: '400',
})

const Links = [
  { href: 'speed', content: 'Solve!' },
  { href: 'dehwyy', content: 'Sign up!' },
]

const Page = () => {
  return (
    <div className="pt-28 sm:pt-56 select-none">
      <div className="text-center flex items-center flex-col">
        <h1 className={`${h1Font.className} text-7xl text-white`}>Solve It!</h1>
        <div className="mt-1.5 w-[275px] h-[5px] bg-gradient-to-r from-white to-custom-light-blue rounded-xl"></div>
      </div>
      <div className="flex justify-evenly pt-16 text-3xl sm:flex-col sm:items-center sm:gap-y-5">
        {Links.map(link => (
          <Link href={link.href}>
            <CustomButton>{link.content}</CustomButton>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Page
