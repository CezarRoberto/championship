import { CreateResultChampionOnGameController } from '@modules/championship_on_game/useCases/resultChampion/createResultChampionOnGameController';
import { Router } from 'express';

const resultRouter = Router();
const createResultChampionshipOnGameController =
    new CreateResultChampionOnGameController();

resultRouter.post('/', createResultChampionshipOnGameController.handle);

export { resultRouter };
