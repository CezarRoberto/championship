import { IChampionshipRepository } from "@modules/championship/repository/IChampionshipRepository";
import { Championship } from "@prisma/client";
import { AppError } from "@shared/error/AppError";
import { inject, injectable } from "tsyringe";

@injectable()
class FindOneChampionshipUseCase {
    constructor(
        @inject('ChampionshipRepository')
        private readonly championshipRepository: IChampionshipRepository,
    ) {}

    async execute(id: string): Promise<Championship> {
        const championship = await this.championshipRepository.findOneChampionship(id)

        if(!championship) {
            throw new AppError('Championship Doesnt exist', 404)
        }

        return championship;
    }
}

export {FindOneChampionshipUseCase}