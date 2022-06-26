import { GameRepository } from '@modules/games/repository/implementation/GameRepository';
import { Game } from '@prisma/client';
import { AppError } from '@shared/error/AppError';
import { inject, injectable } from 'tsyringe';

@injectable()
class FindOneGameUseCase {
    constructor(
        @inject('GameRepository')
        private readonly gameRepository: GameRepository,
    ) {}

    async execute(id: string): Promise<Game> {
        const GameDoesExists = await this.gameRepository.findOne(id);

        if (!GameDoesExists) {
            throw new AppError('Game Doesnt Exists', 404);
        }

        return GameDoesExists;
    }
}

export { FindOneGameUseCase };
