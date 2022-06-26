import { Router } from 'express';
import { championshipRouter } from './championship.router';
import { gameRouter } from './game.router';
import { resultRouter } from './result.router';
import { teamRouter } from './team.router';

const router = Router();

router.use('/championships', championshipRouter);
router.use('/teams', teamRouter);
router.use('/games', gameRouter);
router.use('/results', resultRouter)
router.use('*', async (request, response) => {
    return response.status(404).json({
        status: 'Not found',
        message: 'Rota não encontrada',
    });
});

export { router };
