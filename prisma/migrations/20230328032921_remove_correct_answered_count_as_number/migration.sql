/*
  Warnings:

  - You are about to drop the column `correctAnswered` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "correctAnswered",
ADD COLUMN     "answeredPercentage" INTEGER NOT NULL DEFAULT 0;
