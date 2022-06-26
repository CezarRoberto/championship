import { ITeamRepository } from "@modules/team/repository/ITeamRepository";
import { Team } from "@prisma/client";
import { AppError } from "@shared/error/AppError";
import { inject, injectable } from "tsyringe";

@injectable()
class FindAllTeamsUseCase {
    constructor(
        @inject('TeamRepository')
        private readonly teamRepository: ITeamRepository,
    ) {}

    async execute(): Promise<Team[]> {
        const teamsDoesntExists = await this.teamRepository.findAllTeams()

        if(!teamsDoesntExists) {
            throw new AppError('No Teams Have been Found', 404)
        }

        return teamsDoesntExists
    }
}

export {FindAllTeamsUseCase}