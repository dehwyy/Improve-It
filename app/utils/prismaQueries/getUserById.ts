import prisma from '@/prisma/client'

export const getUserById = async (id: string) => {
  const user = await prisma.user.findFirst({
    where: {
      id,
    },
  })
  return user
}
