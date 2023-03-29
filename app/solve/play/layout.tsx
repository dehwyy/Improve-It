import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Game: Solve it!',
}
const Layout = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>
}

export default Layout
