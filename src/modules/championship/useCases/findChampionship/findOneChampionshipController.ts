import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { FindOneChampionshipUseCase } from './findOneChampionshipUseCase';

class FindOneChampionshipController {
    async hanlde(request: Request, response: Response): Promise<Response> {
        const {id} = request.params

        const findOneChampionshipUseCase = container.resolve(FindOneChampionshipUseCase);

        const championship = await findOneChampionshipUseCase.execute(id)

        return response.status(200).json(championship)
    }
}

export {FindOneChampionshipController}