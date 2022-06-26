import { ICreatChampionshipDTO } from '@modules/championship/dtos/ICreatChampionshipDTO';
import { IUpdateChampionshipDTO } from '@modules/championship/dtos/IUpdateChampionshipDTO';
import { Championship } from '@prisma/client';
import prismaClient from '@shared/infra/prisma';
import { IChampionshipRepository } from '../IChampionshipRepository';

class ChampionshipRepository implements IChampionshipRepository {
    async create({
        name,
        description,
        award,
    }: ICreatChampionshipDTO): Promise<Championship> {
        const championship = await prismaClient.championship.create({
            data: {
                name,
                description,
                award,
            },
        });

        return championship;
    }

    async findAllChampionships(): Promise<Championship[]> {
        const championships = await prismaClient.championship.findMany();
        return championships;
    }

    async findOneChampionship(id: string): Promise<Championship> {
        const championship = await prismaClient.championship.findFirst({
            where: { id },
        });

        return championship as Championship;
    }

    async update({
        id,
        name,
        description,
        award,
    }: IUpdateChampionshipDTO): Promise<Championship> {
        const championship = await prismaClient.championship.update({
            where: { id },
            data: {
                name,
                description,
                award,
            },
        });

        return championship;
    }

    async findByName(name: string): Promise<Championship> {
        const championship = await prismaClient.championship.findFirst({
            where: {
                name,
            },
        });

        return championship as Championship;
    }

    async getWinner(winner: string): Promise<Championship> {
        const championship = await prismaClient.championship.findFirst({
            where: { winner },
        });

        return championship as Championship;
    }
}

export { ChampionshipRepository };
