import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Setting up game...',
}

const Layout = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>
}
export default Layout
