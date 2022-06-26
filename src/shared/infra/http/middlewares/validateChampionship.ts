import { NextFunction, Request, Response } from 'express';
import * as Yup from 'yup';

import { AppError } from '@shared/error/AppError';

async function ValidateChampionship(
    request: Request,
    response: Response,
    next: NextFunction,
) {
    try {
        const body = await request.body;
        const schema = Yup.object().shape({
            name: Yup.string().required('Name is required'),
            description: Yup.string().required('Description is required'),
            award: Yup.number().required('Award is required').positive().integer()
        });
        await schema.validate(body);
        next()
    } catch (error) {
        throw new AppError(error.message, 401);
    }
}

export { ValidateChampionship };
