import prisma from '@/prisma/client'

export const getUserById = async (id: string) => {
  const user = await prisma.user.findFirst({
    where: {
      id,
    },
    include: {
      playSessions: {
        include: {
          session: true,
        },
      },
    },
  })
  return user
}
