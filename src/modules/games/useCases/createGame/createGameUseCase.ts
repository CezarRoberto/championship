import { GameRepository } from '@modules/games/repository/implementation/GameRepository';
import { Game } from '@prisma/client';
import { inject, injectable } from 'tsyringe';

@injectable()
class CreateGameUseCase {
    constructor(
        @inject('GameRepository')
        private readonly gameRepository: GameRepository,
    ) {}

    async execute(team1_id: string, team2_id: string): Promise<Game> {
        const game = await this.gameRepository.create({
            team1_id,
            team2_id,
        });
        const winner = Object.values(game).toString();

        const randomWinner = winner[Math.random() * winner.length];
        const winnerGame = await this.gameRepository.changeWinner(
            game.id,
            randomWinner,
        );

        return winnerGame;
    }
}

export { CreateGameUseCase };
