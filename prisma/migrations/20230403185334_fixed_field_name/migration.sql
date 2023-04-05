/*
  Warnings:

  - You are about to drop the column `answeredCount` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "answeredCount",
ADD COLUMN     "correctAnsweredCount" INTEGER NOT NULL DEFAULT 0;
