import { CreateGameController } from '@modules/games/useCases/createGame/createGameController';
import { DeleteGameController } from '@modules/games/useCases/DeleteGame/deleteGameController';
import { FindOneGameController } from '@modules/games/useCases/findOneGame/findOneGameController';
import { Router } from 'express';
import { ValidateGame } from '../middlewares/validateGame';

const gameRouter = Router();
const createGameController = new CreateGameController();
const findOneGameController = new FindOneGameController();
const deleteGameController = new DeleteGameController();

gameRouter.post('/', ValidateGame, createGameController.handle);
gameRouter.get('/:id', findOneGameController.handle);
gameRouter.delete('/:id', deleteGameController.handle);

export { gameRouter };
