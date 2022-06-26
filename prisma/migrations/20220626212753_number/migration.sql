/*
  Warnings:

  - Changed the type of `award` on the `championship` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "championship" DROP COLUMN "award",
ADD COLUMN     "award" INTEGER NOT NULL,
ALTER COLUMN "winner" SET DEFAULT Null;

-- AlterTable
ALTER TABLE "game" ALTER COLUMN "winner" SET DEFAULT Null;
