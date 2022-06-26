import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { CreateGameUseCase } from './createGameUseCase';

class CreateGameController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { team1_id, team2_id } = request.body;

        const createGameUseCase = container.resolve(CreateGameUseCase);

        const game = await createGameUseCase.execute(team1_id, team2_id);

        return response.status(200).json(game);
    }
}

export { CreateGameController };
