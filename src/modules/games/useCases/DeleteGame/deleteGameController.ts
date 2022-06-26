import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { DeleteGameUseCase } from './deleteGameUseCase';

class DeleteGameController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;

        const deleteGameUseCase = container.resolve(DeleteGameUseCase);

        await deleteGameUseCase.execute(id);

        return response.status(200).json({ Message: 'Deleted' });
    }
}

export { DeleteGameController };
