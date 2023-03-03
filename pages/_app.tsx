import { SessionProvider } from 'next-auth/react'
import { Session } from 'next-auth'
interface IProps {
  Component: any
  pageProps: { session: Session | null | undefined; pageProps: unknown[] }
}
export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: IProps) {
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  )
}
