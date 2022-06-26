import { Team } from "@prisma/client"
import { ICreateTeamDTO } from "../dtos/ICreateTeamDTO"
import { IUpdateTeamDTO } from "../dtos/IUpdateTeamDTO"

interface ITeamRepository {
    create({name, initials}: ICreateTeamDTO): Promise<Team>
    findOne(id: string): Promise<Team>
    findByInitial(initials: string): Promise<Team>
    delete(id:string): Promise<Team>
    update({id, name, initials}: IUpdateTeamDTO): Promise<Team>
    findAllTeams(): Promise<Team[]>
    findManyById(id:string): Promise<Team[]>
}

export {ITeamRepository}