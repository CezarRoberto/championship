import { GameRepository } from '@modules/games/repository/implementation/GameRepository';
import { inject, injectable } from 'tsyringe';
import { Game } from '@prisma/client';
import { AppError } from '@shared/error/AppError';

@injectable()
class DeleteGameUseCase {
    constructor(
        @inject('GameRepository')
        private readonly gameRepository: GameRepository,
    ) {}

    async execute(id: string): Promise<Game> {
        const GameDoesExists = await this.gameRepository.findOne(id);

        if (!GameDoesExists) {
            throw new AppError('Game Doesnt Exists', 404);
        }

        const game = await this.gameRepository.delete(id);

        return game;
    }
}

export { DeleteGameUseCase };
