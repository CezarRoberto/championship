import { ICreateChampionOnGameDTO } from '@modules/championship_on_game/dtos/ICreateChampionshipOnGameDTO';
import prismaClient from '@shared/infra/prisma';
import { IChampionOnGameRepository } from '../IChampionOnGameRepository';

class ChampionshipOnGameRepository implements IChampionOnGameRepository {
    async create(array_games: ICreateChampionOnGameDTO): Promise<Number> {
        const integration = await prismaClient.championshipOnGame.createMany({
            data: [...array_games],
            skipDuplicates: true,
        });

        return integration.count;
    }
}

export { ChampionshipOnGameRepository };
