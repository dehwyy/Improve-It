import prisma from '@/prisma/client'

export default async function updateDescription(userId: string, description: string) {
  await prisma.user.update({
    where: { id: userId },
    data: { description },
  })
}
