import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { CreateChampionshipUseCase } from './createChampionshipUseCase';


class CreateChampionshipController {
    async handle(request: Request, response: Response): Promise<Response> {
        const {name, description, award} = request.body;
        const createChampionshipUseCase = container.resolve(CreateChampionshipUseCase);

        const championship = await createChampionshipUseCase.execute({
            name,
            description,
            award
        });

        return response.status(200).json(championship);
    }
}

export {CreateChampionshipController}