/*
  Warnings:

  - A unique constraint covering the columns `[id]` on the table `User` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateEnum
CREATE TYPE "Difficulty" AS ENUM ('Easy', 'Medium', 'Hard', 'Impossible');

-- CreateEnum
CREATE TYPE "Modes" AS ENUM ('Variable', 'Multiply', 'PlusMinus');

-- CreateEnum
CREATE TYPE "PlayerModes" AS ENUM ('Solo', 'Multiplayer', 'WithBot');

-- CreateTable
CREATE TABLE "PlaySession" (
    "id" TEXT NOT NULL,
    "difficulty" "Difficulty" NOT NULL,
    "mode" "Modes" NOT NULL,
    "count" INTEGER NOT NULL,
    "playDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "playerMode" "PlayerModes" NOT NULL,
    "sessionWinnerId" TEXT NOT NULL,

    CONSTRAINT "PlaySession_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Player" (
    "sessionId" TEXT NOT NULL,
    "playerId" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "CorrectAnswer" (
    "id" TEXT NOT NULL,
    "correctAnsweredUserId" TEXT NOT NULL,
    "sessionId" TEXT NOT NULL,
    "time" INTEGER NOT NULL,

    CONSTRAINT "CorrectAnswer_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "PlaySession_id_key" ON "PlaySession"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Player_sessionId_playerId_key" ON "Player"("sessionId", "playerId");

-- CreateIndex
CREATE UNIQUE INDEX "CorrectAnswer_id_key" ON "CorrectAnswer"("id");

-- CreateIndex
CREATE UNIQUE INDEX "User_id_key" ON "User"("id");

-- AddForeignKey
ALTER TABLE "PlaySession" ADD CONSTRAINT "PlaySession_sessionWinnerId_fkey" FOREIGN KEY ("sessionWinnerId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Player" ADD CONSTRAINT "Player_sessionId_fkey" FOREIGN KEY ("sessionId") REFERENCES "PlaySession"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Player" ADD CONSTRAINT "Player_playerId_fkey" FOREIGN KEY ("playerId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CorrectAnswer" ADD CONSTRAINT "CorrectAnswer_correctAnsweredUserId_fkey" FOREIGN KEY ("correctAnsweredUserId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CorrectAnswer" ADD CONSTRAINT "CorrectAnswer_sessionId_fkey" FOREIGN KEY ("sessionId") REFERENCES "PlaySession"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
