/*
  Warnings:

  - Added the required column `championship_id` to the `game` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "championship" ALTER COLUMN "winner" DROP NOT NULL,
ALTER COLUMN "winner" SET DEFAULT Null;

-- AlterTable
ALTER TABLE "game" ADD COLUMN     "championship_id" TEXT NOT NULL,
ALTER COLUMN "winner" DROP NOT NULL,
ALTER COLUMN "winner" SET DEFAULT Null;

-- AddForeignKey
ALTER TABLE "game" ADD CONSTRAINT "game_championship_id_fkey" FOREIGN KEY ("championship_id") REFERENCES "championship"("id") ON DELETE CASCADE ON UPDATE SET NULL;
