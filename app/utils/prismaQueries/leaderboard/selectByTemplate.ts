import prisma from '@/prisma/client'

interface IArgs {
  count?: number
  name: string
  order: OrderBy
}

export const selectByTemplate = async ({ name, order, count = 10 }: IArgs) => {
  const users = await prisma.user.findMany({
    where: {
      OR: [
        {
          name: {
            contains: name.trim().split(/\s+/).join(' '),
            mode: 'insensitive',
          },
        },
        {
          nickname: {
            contains: name.trim().split(/\s+/).join(' '),
            mode: 'insensitive',
          },
        },
        {
          allNicknames: {
            hasSome: name,
          },
        },
      ],
    },
    orderBy: [order],
    include: {
      correctAnswers: true,
    },
    take: count,
  })
  return users
}
