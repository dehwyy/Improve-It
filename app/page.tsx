import Link from 'next/link'
import { Varela_Round } from '@next/font/google'
import CustomButton from '@/app/components/UI/Global/CustomButton'
import SignInButton from '@/app/components/SignInButton'
import { getUser } from '@/app/utils/prismaQueries/getUserIdByImage'

const h1Font = Varela_Round({
  subsets: ['latin'],
  weight: '400',
})

const Page = async () => {
  const user = await getUser()
  return (
    <div className="pt-28 sm:pt-56 select-none">
      <div className="text-center flex items-center flex-col">
        <h1 className={`${h1Font.className} text-7xl text-white`}>Solve It!</h1>
        <div className="mt-1.5 w-[275px] h-[5px] bg-gradient-to-r from-white to-custom-light-blue rounded-xl"></div>
      </div>
      <div className="flex justify-evenly pt-16 text-3xl sm:flex-col sm:items-center sm:gap-y-5">
        <Link href={'speed'}>
          <CustomButton>Solve</CustomButton>
        </Link>
        {user ? (
          <Link href={`/user/${user.id as string}`}>
            <CustomButton>Profile</CustomButton>
          </Link>
        ) : (
          <SignInButton />
        )}
      </div>
    </div>
  )
}

export default Page
