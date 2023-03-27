-- DropForeignKey
ALTER TABLE "PlaySession" DROP CONSTRAINT "PlaySession_sessionWinnerId_fkey";

-- AlterTable
ALTER TABLE "PlaySession" ALTER COLUMN "sessionWinnerId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "PlaySession" ADD CONSTRAINT "PlaySession_sessionWinnerId_fkey" FOREIGN KEY ("sessionWinnerId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
