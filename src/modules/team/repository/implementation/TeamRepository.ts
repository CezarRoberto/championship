import { ICreateTeamDTO } from '@modules/team/dtos/ICreateTeamDTO';
import { IUpdateTeamDTO } from '@modules/team/dtos/IUpdateTeamDTO';
import { Team } from '@prisma/client';
import prismaClient from '@shared/infra/prisma';
import { ITeamRepository } from '../ITeamRepository';

class TeamRepository implements ITeamRepository {
    async create({ name, initials }: ICreateTeamDTO): Promise<Team> {
        const team = await prismaClient.team.create({
            data: {
                name,
                initials,
            },
        });

        return team;
    }

    async findAllTeams(): Promise<Team[]> {
        const teams = await prismaClient.team.findMany();

        return teams;
    }

    async findByInitial(initials: string): Promise<Team> {
        const team = await prismaClient.team.findFirst({
            where: {initials}
        })

        return team as Team
    }

    async findOne(id: string): Promise<Team> {
        const team = await prismaClient.team.findFirst({
            where: {id}
        })

        return team as Team
    }

    async update({id, name, initials}: IUpdateTeamDTO): Promise<Team> {
        const team = await prismaClient.team.update({
            where: {id},
            data: {
                name,
                initials
            }
        })

        return team
    }

    async delete(id: string): Promise<Team> {
        const team = await prismaClient.team.delete({
            where: {id}
        })

        return team
    }

    async findManyById(id: string): Promise<Team[]> {
        const teams = await prismaClient.team.findMany({
            where: {id}
        })

        return teams
    }
}

export { TeamRepository };
