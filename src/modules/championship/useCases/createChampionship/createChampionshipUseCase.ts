import { IChampionshipRepository } from '@modules/championship/repository/IChampionshipRepository';
import { Championship } from '@prisma/client';
import { AppError } from '@shared/error/AppError';
import { inject, injectable } from 'tsyringe';

@injectable()
class CreateChampionshipUseCase {
    constructor(
        @inject('ChampionshipRepository')
        private readonly championshipRepository: IChampionshipRepository,
    ) {}

    async execute({ name, description, award }): Promise<Championship> {
        const championshipAlreadyExists =
            await this.championshipRepository.findByName(name);

        if (championshipAlreadyExists) {
            throw new AppError('Championship Already Exists', 404);
        }

        const championship = await this.championshipRepository.create({
            name,
            description,
            award,
        });

        return championship;
    }
}

export { CreateChampionshipUseCase };
