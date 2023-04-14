import prisma from '@/prisma/client'

export default async function updateNickname(userId: string, nickname: string) {
  const user = await prisma.user.findUnique({
    where: {
      id: userId,
    },
    select: {
      allNicknames: true,
    },
  })
  await prisma.user.update({
    where: {
      id: userId,
    },
    data: {
      nickname,
      allNicknames: {
        set: [...user!.allNicknames.slice(-2), nickname],
      },
    },
  })
}
