import prisma from '@/prisma/client'

export const getUserSession = async (id: string) => {
  const session = await prisma.user.findUnique({
    where: {
      id,
    },
    include: {
      playSessions: {
        include: {
          session: {
            include: {
              correctAnswers: true,
            },
          },
        },
      },
    },
  })
  return session!.playSessions
}
