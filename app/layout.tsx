import './global.css'
import Navbar from '@/app/components/Navbar/Component'
import Provider from '@/app/components/Providers'
import { getUserNotById } from '@/app/utils/prismaQueries/user/getUserNotById'
import NextTopLoader from 'nextjs-toploader'
import { FC } from 'react'

interface IProps {
  children: React.ReactNode
}

const Layout: (props: IProps) => Promise<JSX.Element> = async ({ children }) => {
  const user = await getUserNotById()
  return (
    <html lang="en">
      <head />
      <body className="uusm:min-w-[279px] w-full h-full min-h-screen min-w-screen bg-[#333333] overflow-x-hidden">
        <NextTopLoader showSpinner={false} color="rgb(239,68,68)" />
        <Provider>
          <Navbar userId={user?.id as string} />
          <ContentWrapper>{children}</ContentWrapper>
        </Provider>
      </body>
    </html>
  )
}

const ContentWrapper: FC<IProps> = ({ children }) => {
  return <main className="w-[1100px] max-w-full mx-auto pt-[100px] min-h-screen h-full p-5 ">{children}</main>
}

export default Layout
