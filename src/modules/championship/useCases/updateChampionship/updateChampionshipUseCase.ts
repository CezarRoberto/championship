import { IChampionshipRepository } from "@modules/championship/repository/IChampionshipRepository";
import { Championship } from "@prisma/client";
import { AppError } from "@shared/error/AppError";
import { injectable, inject } from "tsyringe";

@injectable()
class UpdateChampionshipUseCase {
    constructor(
        @inject('ChampionshipRepository')
        private readonly championshipRepository: IChampionshipRepository,
    ) {}

    async execute({id, name, description, award}): Promise<Championship> {
        const championshipDoesExists = await this.championshipRepository.findOneChampionship(id);

        if(!championshipDoesExists) {
            throw new AppError('Championship Doesnt Exists', 404);
        }

        const updatedChampionship = await this.championshipRepository.update({
            id,
            name,
            description,
            award
        })
        
        return updatedChampionship
    }
}

export {UpdateChampionshipUseCase}