import { Championship } from "@prisma/client";
import { ICreatChampionshipDTO } from "../dtos/ICreatChampionshipDTO";
import { IUpdateChampionshipDTO } from "../dtos/IUpdateChampionshipDTO";

interface IChampionshipRepository {
    findOneChampionship(id: string): Promise<Championship>
    findByName(name:string): Promise<Championship>
    create({name, description, award}: ICreatChampionshipDTO): Promise<Championship>
    update({id, name, description, award}: IUpdateChampionshipDTO): Promise<Championship>
    findAllChampionships(): Promise<Championship[]>
    getWinner(winner: string): Promise<Championship>
}

export {IChampionshipRepository}