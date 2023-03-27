/*
  Warnings:

  - A unique constraint covering the columns `[id,sessionId]` on the table `Player` will be added. If there are existing duplicate values, this will fail.
  - The required column `id` was added to the `Player` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.

*/
-- DropForeignKey
ALTER TABLE "CorrectAnswer" DROP CONSTRAINT "CorrectAnswer_correctAnsweredUserId_fkey";

-- DropForeignKey
ALTER TABLE "Player" DROP CONSTRAINT "Player_playerId_fkey";

-- DropIndex
DROP INDEX "Player_sessionId_playerId_key";

-- AlterTable
ALTER TABLE "CorrectAnswer" ALTER COLUMN "correctAnsweredUserId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Player" ADD COLUMN     "id" TEXT NOT NULL,
ALTER COLUMN "playerId" DROP NOT NULL,
ADD CONSTRAINT "Player_pkey" PRIMARY KEY ("id");

-- CreateIndex
CREATE UNIQUE INDEX "Player_id_sessionId_key" ON "Player"("id", "sessionId");

-- AddForeignKey
ALTER TABLE "Player" ADD CONSTRAINT "Player_playerId_fkey" FOREIGN KEY ("playerId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CorrectAnswer" ADD CONSTRAINT "CorrectAnswer_correctAnsweredUserId_fkey" FOREIGN KEY ("correctAnsweredUserId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
