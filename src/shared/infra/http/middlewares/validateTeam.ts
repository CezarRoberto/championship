import { NextFunction, Request, Response } from 'express';
import * as Yup from 'yup';

import { AppError } from '@shared/error/AppError';

async function ValidateTeam(
    request: Request,
    response: Response,
    next: NextFunction,
) {
    try {
        const body = await request.body;
        const schema = Yup.object().shape({
            name: Yup.string().required('Name is required'),
            initials: Yup.string().required('Initials is required').length(3),
        });
        await schema.validate(body);
        next()
    } catch (error) {
        throw new AppError(error.message, 401);
    }
}

export { ValidateTeam };
