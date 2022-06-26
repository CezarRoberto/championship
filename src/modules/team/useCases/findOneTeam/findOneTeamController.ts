import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { FindOneTeamUseCase } from './findOneTeamUseCase';

class FindOneTeamController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;

        const findOneTeamUseCase = container.resolve(FindOneTeamUseCase);

        const team = findOneTeamUseCase.execute(id);

        return response.status(200).json(team);
    }
}

export { FindOneTeamController };
