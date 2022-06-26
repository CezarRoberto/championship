/*
  Warnings:

  - You are about to drop the column `winner` on the `ChampionshipOnGame` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "ChampionshipOnGame" DROP COLUMN "winner";

-- AlterTable
ALTER TABLE "championship" ADD COLUMN     "winner" TEXT NOT NULL DEFAULT Null;

-- AlterTable
ALTER TABLE "game" ALTER COLUMN "winner" SET DEFAULT Null;
