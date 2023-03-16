import './global.css'
import Navbar from '@/app/components/Navbar/Component'
import AppWrapper from '@/app/components/UI/Wrappers/AppWrapper'
import ContentWrapper from '@/app/components/UI/Wrappers/ContentWrapper'
import Provider from '@/app/components/Provider'
import { getUser } from '@/app/utils/prismaQueries/user/getUserIdByImage'
import NextTopLoader from 'nextjs-toploader'
interface IProps {
  children: React.ReactNode
}

const Layout: (props: IProps) => Promise<JSX.Element> = async ({ children }) => {
  const user = await getUser()
  return (
    <html lang="en">
      <head />
      <body className="uusm:min-w-[279px] w-full h-full min-h-screen min-w-screen bg-[#333333] overflow-x-hidden">
        <NextTopLoader showSpinner={false} />
        <Provider>
          <AppWrapper>
            <Navbar userId={user?.id as string} />
            <ContentWrapper>{children}</ContentWrapper>
          </AppWrapper>
        </Provider>
      </body>
    </html>
  )
}

export default Layout
