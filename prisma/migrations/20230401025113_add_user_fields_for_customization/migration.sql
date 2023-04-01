-- AlterTable
ALTER TABLE "User" ADD COLUMN     "answeredCount" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "nickname" TEXT,
ADD COLUMN     "profileBackground" TEXT,
ADD COLUMN     "profilePicture" TEXT;
