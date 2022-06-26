import { IChampionshipRepository } from '@modules/championship/repository/IChampionshipRepository';
import { IChampionOnGameRepository } from '@modules/championship_on_game/repository/IChampionOnGameRepository';
import { ITeamRepository } from '@modules/team/repository/ITeamRepository';
import { Team } from '@prisma/client';
import { inject, injectable } from 'tsyringe';

@injectable()
class CreateResultChampionOnGameUseCase {
    constructor(
        @inject('ChampionOnGameRepository')
        private readonly championOnGameRepository: IChampionOnGameRepository,
        @inject('ChampionshipRepository')
        private readonly championshipRepository: IChampionshipRepository,
        @inject('TeamRepository')
        private readonly teamRepository: ITeamRepository,
    ) {}

    async execute(games): Promise<Team> {
        const integration = await this.championOnGameRepository.create(games);

        const winner = Object.values(integration).toString();

        const randomWinner = winner[Math.random() * winner.length];

        const championshipWinner = await this.championshipRepository.getWinner(
            randomWinner,
        );

        const teamWinner = await this.teamRepository.findOne(
            championshipWinner.id,
        );

        return teamWinner as Team;
    }
}

export { CreateResultChampionOnGameUseCase };
