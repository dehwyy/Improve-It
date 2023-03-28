import prisma from '@/prisma/client'

export const selectByCorrectAnswered = async (count: number = 10) => {
  const users = await prisma.user.findMany({
    orderBy: [
      {
        correctAnswers: {
          _count: 'desc',
        },
      },
    ],
    include: {
      correctAnswers: true,
    },
    take: count,
  })
  return users
}
