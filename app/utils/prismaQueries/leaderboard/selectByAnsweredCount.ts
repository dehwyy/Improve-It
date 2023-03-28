import prisma from '@/prisma/client'

export const selectByAnsweredCount = async (count: number = 10) => {
  const users = await prisma.user.findMany({
    orderBy: [
      {
        answered: 'desc',
      },
    ],
    include: {
      correctAnswers: true,
    },
    take: count,
  })
  return users
}
