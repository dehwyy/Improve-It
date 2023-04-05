-- AlterTable
ALTER TABLE "User" ADD COLUMN     "allNicknames" TEXT[] DEFAULT ARRAY[]::TEXT[];
