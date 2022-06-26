import { NextFunction, Request, Response } from 'express';
import * as Yup from 'yup';

import { AppError } from '@shared/error/AppError';

async function ValidateGame(
    request: Request,
    response: Response,
    next: NextFunction,
) {
    try {
        const body = await request.body;
        const schema = Yup.object().shape({
            team1_id: Yup.string().required('Team 1 ID is required'),
            team2_id: Yup.string().required('Team 2 ID is required'),
        });
        await schema.validate(body);
        next();
    } catch (error) {
        throw new AppError(error.message, 401);
    }
}

export { ValidateGame };
