import prisma from '@/prisma/client'

export default async function updateProfileImage(userId: string, img: string) {
  await prisma.user.update({
    where: { id: userId },
    data: { profilePicture: img },
  })
}
