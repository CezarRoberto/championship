import { ICreateGameDTO } from "@modules/games/dtos/ICreateGameDTO";
import { Game } from "@prisma/client";
import prismaClient from "@shared/infra/prisma";
import { IGameRepository } from "../IGameRepository";

class GameRepository implements IGameRepository {
    async create({ team1_id, team2_id }: ICreateGameDTO): Promise<Game> {
        const game = await prismaClient.game.create({
            data: {
                team1_id,
                team2_id,
            }
        })

        return game
    }

    async findOne(id: string): Promise<Game> {
        const game = await prismaClient.game.findFirst({
            where: {id}
        })
    return game as Game
    }

    async findMany(id: string): Promise<Game[]> {
        const games = await prismaClient.game.findMany({
            where: {id}
        })

        return games
    }

    async delete(id: string): Promise<Game> {
        const game = await prismaClient.game.delete({
            where: {id}
        })

        return game
    }

    async changeWinner(id: string, winner: string): Promise<Game> {
        const game = await prismaClient.game.update({
            where: {id},
            data: {
                winner
            }
        })

        return game
    }
}

export {GameRepository}