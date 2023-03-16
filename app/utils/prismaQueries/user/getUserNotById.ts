import { getServerSession, Session, User } from 'next-auth'
import { authOptions } from '@/pages/api/auth/[...nextauth]'
import prisma from '@/prisma/client'

export const getUserNotById = async () => {
  const data = await getServerSession(authOptions)
  const whereQuery = getQuery(data as Session)
  if (!whereQuery) return null
  const user = await prisma.user.findFirst({
    where: whereQuery,
  })
  return user
}

type PossibleFields = 'image' | 'email' | 'name'

function getQuery(data: Session): Partial<Record<PossibleFields, string>> | null {
  const user = data?.user
  if (!user) return null
  if (user.image) {
    return {
      image: user.image,
    }
  } else if (user.email) {
    return {
      email: user.email,
    }
  } else if (user.name) {
    return {
      name: user.name,
    }
  }
  return null
}
