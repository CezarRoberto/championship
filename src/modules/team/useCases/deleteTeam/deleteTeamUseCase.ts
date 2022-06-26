import { ITeamRepository } from "@modules/team/repository/ITeamRepository";
import { Team } from "@prisma/client";
import { AppError } from "@shared/error/AppError";
import { inject, injectable } from "tsyringe";

@injectable()
class DeleteTeamUseCase {
    constructor(
        @inject('TeamRepository')
        private readonly teamRepository: ITeamRepository,
    ) {}

    async execute(id: string): Promise<Team> {
        const teamDoesExists = await this.teamRepository.findOne(id)

        if(!teamDoesExists) {
            throw new AppError('Team Doesnt Exists', 404)
        }

        return teamDoesExists;
    }
}

export {DeleteTeamUseCase}