import React from 'react'
import Icons from '@/app/components/Navbar/components/Icons'
import NextTopLoader from 'nextjs-toploader'

interface IProps {
  userId: string
}

const DefaultNavbar = ({ userId }: IProps) => {
  return (
    <>
      <NextTopLoader showSpinner={false} color="rgb(239,68,68)" />
      <nav className="fixed right-0 top-0 left-0 select-none z-50 bg-gradient-to-b from-violet-700 to-violet-500">
        <div className="flex-row-reverse w-full  px-10 p-3 usm:px-5 flex vsm:justify-center justify-start">
          <div className="flex justify-start vsm:justify-center usm:gap-2 vsm:gap-5 transition-all gap-10 text-zinc-800">
            <Icons userId={userId} isGrowable={true} />
          </div>
        </div>
      </nav>
    </>
  )
}

export default DefaultNavbar
