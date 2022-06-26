import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateTeamUseCase } from "./createTeamUseCase";

class CreateTeamController {
    async handle(request: Request, response: Response): Promise<Response> {
        const {name, initials} = request.body;

        const createTeamUseCase = container.resolve(CreateTeamUseCase);

        const team = await createTeamUseCase.execute({
            name,
            initials
        })

        return response.status(200).json(team)
    }
}

export {CreateTeamController}