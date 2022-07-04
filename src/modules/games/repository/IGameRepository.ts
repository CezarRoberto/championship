import { Game } from "@prisma/client";
import { ICreateGameDTO } from "../dtos/ICreateGameDTO";

interface IGameRepository {
    create({team1_id, team2_id, championship_id}: ICreateGameDTO): Promise<Game>
    findOne(id: string): Promise<Game>
    delete(id:string): Promise<Game>
    findMany(id: string): Promise<Game[]>
    changeWinner(id: string, winner: string): Promise<Game>
}

export {IGameRepository}