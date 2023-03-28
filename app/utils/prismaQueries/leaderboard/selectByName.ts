import prisma from '@/prisma/client'

export const selectByName = async (name: string) => {
  const users = await prisma.user.findMany({
    where: {
      name: {
        contains: name,
      },
    },
    include: {
      correctAnswers: true,
    },
  })
  return users
}
