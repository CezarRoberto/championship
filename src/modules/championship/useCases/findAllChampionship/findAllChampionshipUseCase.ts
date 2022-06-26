import { IChampionshipRepository } from "@modules/championship/repository/IChampionshipRepository";
import { Championship } from "@prisma/client";
import { AppError } from "@shared/error/AppError";
import { inject, injectable } from "tsyringe";

@injectable()
class FindAllChampionshipUseCase {
    constructor(
        @inject('ChampionshipRepository')
        private readonly championshipRepository: IChampionshipRepository,
    ) {}

    async execute(): Promise<Championship[]> {
        const championships = await this.championshipRepository.findAllChampionships()

        if(!championships) {
            throw new AppError('No Championships have been found', 404);
        }

        return championships;
    }
}

export {FindAllChampionshipUseCase}