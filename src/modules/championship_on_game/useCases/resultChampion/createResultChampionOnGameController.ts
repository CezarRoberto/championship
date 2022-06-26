import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { CreateResultChampionOnGameUseCase } from './createResultChampionOnGameUseCase';

class CreateResultChampionOnGameController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { games } = request.body;

        const createResultChampionOnGameUseCase = container.resolve(
            CreateResultChampionOnGameUseCase,
        );

        const teamWinner = await createResultChampionOnGameUseCase.execute(
            games,
        );

        return response.status(200).json(teamWinner);
    }
}

export { CreateResultChampionOnGameController };
