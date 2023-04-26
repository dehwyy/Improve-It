import prisma from '@/prisma/client'

export default async function updateBackgroundProfileImage(userId: string, profileBackground: string) {
  await prisma.user.update({
    where: { id: userId },
    data: { profileBackground },
  })
}
