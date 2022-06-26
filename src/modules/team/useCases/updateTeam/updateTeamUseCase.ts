import { ITeamRepository } from '@modules/team/repository/ITeamRepository';
import { Team } from '@prisma/client';
import { AppError } from '@shared/error/AppError';
import { inject, injectable } from 'tsyringe';

@injectable()
class UpdateTeamUseCase {
    constructor(
        @inject('TeamRepository')
        private readonly teamRepository: ITeamRepository,
    ) {}

    async execute({id, name, initials}): Promise<Team> {
        const teamDoesntExists = await this.teamRepository.findOne(id)

        if(!teamDoesntExists) {
            throw new AppError('Team Doesnt Exists', 404)
        }

        const teamUpdated = await this.teamRepository.update({
            id,
            name,
            initials
        })

        return teamUpdated
    }
}

export {UpdateTeamUseCase}