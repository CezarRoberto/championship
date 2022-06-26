-- AlterTable
ALTER TABLE "team" ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- CreateTable
CREATE TABLE "game" (
    "id" TEXT NOT NULL,
    "team1_id" TEXT NOT NULL,
    "team2_id" TEXT NOT NULL,
    "winner" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "game_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ChampionshipOnGame" (
    "id" TEXT NOT NULL,
    "game_id" TEXT NOT NULL,
    "championship_id" TEXT NOT NULL,
    "winner" TEXT NOT NULL,

    CONSTRAINT "ChampionshipOnGame_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "game_id_key" ON "game"("id");

-- CreateIndex
CREATE UNIQUE INDEX "ChampionshipOnGame_id_key" ON "ChampionshipOnGame"("id");

-- AddForeignKey
ALTER TABLE "game" ADD CONSTRAINT "game_team1_id_fkey" FOREIGN KEY ("team1_id") REFERENCES "team"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "game" ADD CONSTRAINT "game_team2_id_fkey" FOREIGN KEY ("team2_id") REFERENCES "team"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ChampionshipOnGame" ADD CONSTRAINT "ChampionshipOnGame_championship_id_fkey" FOREIGN KEY ("championship_id") REFERENCES "championship"("id") ON DELETE SET NULL ON UPDATE SET NULL;

-- AddForeignKey
ALTER TABLE "ChampionshipOnGame" ADD CONSTRAINT "ChampionshipOnGame_game_id_fkey" FOREIGN KEY ("game_id") REFERENCES "game"("id") ON DELETE SET NULL ON UPDATE SET NULL;
