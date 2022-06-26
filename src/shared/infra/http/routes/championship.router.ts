import { CreateChampionshipController } from '@modules/championship/useCases/createChampionship/createChampionshipController';
import { FindAllChampionshipController } from '@modules/championship/useCases/findAllChampionship/findAllChampionshipController';
import { FindOneChampionshipController } from '@modules/championship/useCases/findChampionship/findOneChampionshipController';
import { UpdateChampionshipController } from '@modules/championship/useCases/updateChampionship/updateChampionshipController';
import { Router } from 'express';
import { ValidateChampionship } from '../middlewares/validateChampionship';

const championshipRouter = Router();
const createChampionshipController = new CreateChampionshipController();
const findAllChampionshipController = new FindAllChampionshipController();
const findOneChampionshipController = new FindOneChampionshipController();
const updateChampionshipController = new UpdateChampionshipController();

championshipRouter.post(
    '/',
    ValidateChampionship,
    createChampionshipController.handle,
);
championshipRouter.get('/', findAllChampionshipController.hanlde);
championshipRouter.get('/:id', findOneChampionshipController.hanlde);
championshipRouter.put('/:id', updateChampionshipController.handle);

export { championshipRouter };
