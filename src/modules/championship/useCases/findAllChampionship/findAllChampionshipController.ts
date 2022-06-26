import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { FindAllChampionshipUseCase } from './findAllChampionshipUseCase';

class FindAllChampionshipController {
    async hanlde(request: Request, response: Response): Promise<Response> {
        const findAllChampionshipUseCase = container.resolve(FindAllChampionshipUseCase)

        const championships = await findAllChampionshipUseCase.execute()

        return response.status(200).json(championships)
    }
}

export {FindAllChampionshipController}