import type { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next'
import { getProviders, signIn } from 'next-auth/react'
import { getServerSession } from 'next-auth/next'
import { authOptions } from '@/pages/api/auth/[...nextauth]'
import '../../app/global.css'
import AuthMethodWrapper from '@/app/components/UI/Wrappers/AuthMethodWrapper'
export default function SignIn({ providers }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const { github, vk } = providers as Record<'github' | 'vk', any>
  return (
    <div className="w-screen h-screen bg-[#444444] flex items-center justify-center cursor-pointer">
      <div className="w-96 bg-black block-neo-style flex flex-col justify-evenly gap-y-5 p-5">
        <AuthMethodWrapper id={github.id} name={github.name} />
        <AuthMethodWrapper id={vk.id} name={vk.name} />
      </div>
    </div>
  )
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await getServerSession(context.req, context.res, authOptions)
  if (session) {
    return { redirect: { destination: '/' } }
  }
  const providers = await getProviders()
  return {
    props: { providers: providers ?? [] },
  }
}
