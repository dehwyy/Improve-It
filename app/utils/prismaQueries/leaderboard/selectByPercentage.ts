import prisma from '@/prisma/client'

export const selectByPercentage = async (count: number = 10) => {
  const users = await prisma.user.findMany({
    orderBy: [
      {
        answeredPercentage: 'desc',
      },
    ],
    include: {
      correctAnswers: true,
    },
    take: count,
  })
  return users
}
