import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { FindAllTeamsUseCase } from './findAllTeamsUseCase';

class FindAllTeamsController {
    async handle(request: Request, response: Response): Promise<Response> {
        const findAllTeamsUseCase = container.resolve(FindAllTeamsUseCase);

        const teams = await findAllTeamsUseCase.execute();

        return response.status(200).json(teams);
    }
}

export { FindAllTeamsController };
