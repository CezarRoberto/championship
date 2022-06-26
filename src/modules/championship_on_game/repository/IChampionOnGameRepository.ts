import { ChampionshipOnGame } from '@prisma/client';
import { ICreateChampionOnGameDTO } from '../dtos/ICreateChampionshipOnGameDTO';

interface IChampionOnGameRepository {
    create([
        { game_id, championship_id },
    ]: ICreateChampionOnGameDTO): Promise<Number>;
}

export { IChampionOnGameRepository };
