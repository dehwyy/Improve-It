import prisma from '@/prisma/client'

export default async function updateNickname(userId: string, nickname: string) {
  await prisma.user.update({
    where: {
      id: userId,
    },
    data: {
      nickname,
      allNicknames: {
        set: nickname,
      },
    },
  })
}
