import { Request, Response } from "express";
import { container } from "tsyringe";
import { UpdateTeamUseCase } from "./updateTeamUseCase";

class UpdateTeamController {
    async handle(request: Request, response: Response): Promise<Response> {
        const {id} = request.params;
        const {name, initials} = request.body;
        const updateTeamUseCase = container.resolve(UpdateTeamUseCase);

        const team = await updateTeamUseCase.execute({
            id,
            name,
            initials
        })

        return response.status(200).json(team)
    }
}

export { UpdateTeamController}