import './global.css'
import Navbar from '@/app/components/UI/Navbar'
import AppWrapper from '@/app/components/UI/Wrappers/AppWrapper'
import ContentWrapper from '@/app/components/UI/Wrappers/ContentWrapper'
import Provider from '@/app/components/Provider'
import { getUser } from '@/app/utils/prismaQueries/user/getUserIdByImage'
interface IProps {
  children: React.ReactNode
}

const Layout: (props: IProps) => Promise<JSX.Element> = async ({ children }) => {
  const user = await getUser()
  return (
    <html lang="en">
      <head />
      <body className="uusm:min-w-[290px] w-full h-full min-h-screen min-w-full bg-[#444444] overflow-x-hidden">
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
