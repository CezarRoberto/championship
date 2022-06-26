import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { FindOneGameUseCase } from './findOneGameUseCase';

class FindOneGameController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;

        const findOneGameUseCase = container.resolve(FindOneGameUseCase);

        const game = await findOneGameUseCase.execute(id);

        return response.status(200).json(game);
    }
}

export { FindOneGameController };
