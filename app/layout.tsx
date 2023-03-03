import './global.css'
import Navbar from '@/app/components/UI/Navbar'
import AppWrapper from '@/app/components/UI/Wrappers/AppWrapper'
import ContentWrapper from '@/app/components/UI/Wrappers/ContentWrapper'
import Provider from '@/app/components/Provider'
import { getServerSession, Session } from 'next-auth'
import { authOptions } from '@/pages/api/auth/[...nextauth]'
import prisma from '@/prisma/client'
interface IProps {
  children: React.ReactNode
}

const Layout: (props: IProps) => Promise<JSX.Element> = async ({
  children,
}) => {
  const data = await getServerSession(authOptions)
  return (
    <html lang="en">
      <head />
      <body className="w-full h-full min-h-screen min-w-full bg-[#444444] overflow-auto">
        <Provider>
          <AppWrapper>
            <Navbar data={data as Session} />
            <ContentWrapper>{children}</ContentWrapper>
          </AppWrapper>
        </Provider>
      </body>
    </html>
  )
}

export default Layout
