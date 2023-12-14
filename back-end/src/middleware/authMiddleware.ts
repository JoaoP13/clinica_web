/* eslint-disable no-unused-vars */

/*
import { NextFunction, Request, Response } from 'express';
import jwt, { TokenExpiredError } from 'jsonwebtoken';
import UserService from '../src/database/postgresql/services/user.service';
import ApiAccessError from '../error/ApiAccessError';

type JwtPayload = {
    id: number;
}

type UserPayload = {
    id: number;
    password: string;
    email: string;
}

export const authMiddleware = async (
    req: any,
    res: Response,
    next: NextFunction
) => {
    const { authorization } = req.headers;

    const userService = new UserService();

    if (!authorization) {
        throw new ApiAccessError('Não autorizado', 401);
    }

    const token = authorization.split(' ')[1];
    let user: any;

    try {
        const { id } = jwt.verify(token, process.env.JWT_PASS ?? '') as JwtPayload;

        user = await userService.getById('User', id);
    } catch (error: any) {
        if (error instanceof TokenExpiredError) {
            res.status(401).send({
                message: 'Sessão expirada',
            });

            return;
        }

        res.status(400).send({
            message: error.message,
        });

        return;
    }

    if (!user) {
        res.status(401).send({
            message: 'Sessão expirada',
        });

        return;
    }

    const { password: _, ...loggedUser } = user as UserPayload;

    req.user = loggedUser;

    next();
};
*/