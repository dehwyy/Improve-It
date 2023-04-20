import prisma from '@/prisma/client'

export const getUserNicknames = async (id: string) => {
  const user = await prisma.user.findUnique({
    where: {
      id,
    },
    select: {
      allNicknames: true,
      name: true,
    },
  })
  if (!user) return [] as string[]
  return [user.name, ...user.allNicknames] as string[]
}
