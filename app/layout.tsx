import './global.css'
import Navbar from '@/app/components/Navbar/Component'
import Providers from '@/app/components/Providers'
import { getUserNotById } from '@/app/utils/prismaQueries/user/getUserNotById'
import { FC } from 'react'
import { Metadata } from 'next'
import Teleports from '@/app/components/Teleports'
import { Suspense } from 'react'

export const metadata: Metadata = {
  title: 'Improve it!',
  description: 'Upgrade your yourself',
  viewport: { width: 'device-width', initialScale: 1 },
  generator: 'Next.js',
  applicationName: 'ImproveIt',
  referrer: 'origin-when-cross-origin',
  keywords:
    'Math, equations, variable, solve, mind, training, genius, improve it, improve, improve-it, solve it, Solve-it!, solve-it, Solve it!, self-improvement, improvement, gigachad, compete, sessions, users, open-source, against bot, bot, math practice, solo, singleplayer, ',
  authors: [{ name: 'dehwyy', url: 'https://github.com/dehwyy' }],
  colorScheme: 'dark',
  creator: 'dehwyy <dehwyy@yandex.ru>',
  publisher: 'dehwyy',
  alternates: {},
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
  },
  themeColor: '#333333',
  metadataBase: new URL(import.meta.url),
  openGraph: {
    title: 'Improve it!',
    description: 'Improve your mental calculator',
    url: 'https://improve-it.vercel.app',
    siteName: 'Improve it!',
    images: [
      {
        url: '/metadata/opengraph-image.png',
        width: 800,
        height: 600,
      },
    ],
    locale: 'en-US',
    type: 'website',
  },
}

interface IProps {
  children: React.ReactNode
}

const Layout: (props: IProps) => Promise<JSX.Element> = async ({ children }) => {
  const user = await getUserNotById()
  return (
    <html lang="en">
      <body className="uusm:min-w-[279px] w-full h-full min-h-screen min-w-screen bg-[#333333] overflow-x-hidden">
        <Providers>
          <Teleports>
            <Suspense fallback={<></>}>
              <Navbar userId={user?.id as string} />
            </Suspense>
            <ContentWrapper>{children}</ContentWrapper>
          </Teleports>
        </Providers>
      </body>
    </html>
  )
}

const ContentWrapper: FC<IProps> = ({ children }) => {
  return <main className="w-[1100px] max-w-full mx-auto pt-[100px] min-h-screen h-full p-5 sm:p-0.5 ">{children}</main>
}

export default Layout
