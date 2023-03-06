import { getServerSession } from 'next-auth'
import { authOptions } from '@/pages/api/auth/[...nextauth]'
import prisma from '@/prisma/client'

export const getUser = async (image?: string) => {
  // If no image as fn arg, image will be taken from storage; it means current user will be returned
  const data = await getServerSession(authOptions)
  if (data && data.user) {
    const user = await prisma.user.findFirst({
      where: {
        image: image || data.user.image,
      },
    })
    return user
  } else {
    return null
  }
}
