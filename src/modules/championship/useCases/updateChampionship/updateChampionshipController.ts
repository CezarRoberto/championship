import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { UpdateChampionshipUseCase } from './updateChampionshipUseCase';

class UpdateChampionshipController {
    async handle(request: Request, response: Response): Promise<Response> {
        const {id} = request.params;

        const {name, description, award} = request.body;

        const updateChampionshipUseCase = container.resolve(UpdateChampionshipUseCase)

        const championship = await updateChampionshipUseCase.execute({
            id,
            name,
            description,
            award
        })

        return response.status(200).json(championship)
    }
}

export {UpdateChampionshipController}