import prisma from '@/prisma/client'

interface IArgs {
  count?: number
  name: string
  order: OrderBy
}

export const selectByTemplate = async ({ name, order, count = 10 }: IArgs) => {
  const users = await prisma.user.findMany({
    where: {
      name: {
        contains: name,
      },
    },
    orderBy: [order],
    include: {
      correctAnswers: true,
    },
    take: count,
  })
  return users
}
