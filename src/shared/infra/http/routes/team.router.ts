import { CreateTeamController } from '@modules/team/useCases/createTeam/createTeamController';
import { DeleteTeamController } from '@modules/team/useCases/deleteTeam/deleteTeamController';
import { FindAllTeamsController } from '@modules/team/useCases/findAllTeam/findAllTeamsController';
import { FindOneTeamController } from '@modules/team/useCases/findOneTeam/findOneTeamController';
import { UpdateTeamController } from '@modules/team/useCases/updateTeam/updateTeamController';
import { Router } from 'express';
import { ValidateTeam } from '../middlewares/validateTeam';

const teamRouter = Router();
const createTeamController = new CreateTeamController();
const updateTeamController = new UpdateTeamController();
const findOneTeamController = new FindOneTeamController();
const findAllTeamsController = new FindAllTeamsController();
const deleteTeamController = new DeleteTeamController();

teamRouter.post('/', ValidateTeam, createTeamController.handle);
teamRouter.get('/', findAllTeamsController.handle);
teamRouter.get('/:id', findOneTeamController.handle);
teamRouter.put('/:id', updateTeamController.handle);
teamRouter.delete('/:id', deleteTeamController.handle);

export { teamRouter };
