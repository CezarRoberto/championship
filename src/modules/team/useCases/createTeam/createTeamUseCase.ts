import { ITeamRepository } from '@modules/team/repository/ITeamRepository';
import { Team } from '@prisma/client';
import { AppError } from '@shared/error/AppError';
import { inject, injectable } from 'tsyringe';

@injectable()
class CreateTeamUseCase {
    constructor(
        @inject('TeamRepository')
        private readonly teamRepository: ITeamRepository,
    ) {}

    async execute({ name, initials }): Promise<Team> {
        const teamAlreadyExists = await this.teamRepository.findByInitial(
            initials,
        );

        if (teamAlreadyExists) {
            throw new AppError('Team Already Exists', 404);
        }

        const team = await this.teamRepository.create({
            name,
            initials,
        });

        return team;
    }
}

export { CreateTeamUseCase };
