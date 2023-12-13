import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import ValidatorError from '../../error/ValidatorError';
import BasicController from './basic.controller';
import UserService from '../database/postgresql/services/user.service';
import BasicValidator from '../database/postgresql/validators/basic.validator';
import LoggerService from '../database/postgresql/services/logger.service';

class LoginController extends BasicController {
    userService: UserService;
    loggerService: LoggerService;

    public constructor(req: Request, res: Response) {
        super(req, res);
        this.model = 'User';
        this.userService = new UserService();
        this.loggerService = new LoggerService();
    }

    async auth(): Promise<object> {
        const basicValidator: BasicValidator = new BasicValidator();
        
        let { email, password } = this.request.query;
        
        email = email ? email.toString() : '';
        password = password ? password.toString() : '';

        try {
            basicValidator.isEmailValid(email?.toString(), 'email');

            const result = await this.userService.getUser(this.model, email);

            if (!Object.keys(result).length) {
                this.response.status(400).send({
                    message: 'Usuário ou senha inválidos!'
                });

                return {};
            }

            if (!this.userService.isHashEqualsPassword(password, result.password)) {
                this.response.status(400).send({
                    message: 'Usuário ou senha inválidos!'
                });

                return {};
            }

            const token = jwt.sign({ id: result.id }, process.env.JWT_PASS ?? '', {
                expiresIn: '8h'
            });

            type resultKey = keyof typeof result;

            delete result['password' as resultKey];
            delete result['password_reset' as resultKey];

            this.response.status(200).send({ ...result, token });

            return result;
        } catch (err: any) {
            if (err instanceof ValidatorError) {
                this.response.status(400).send({
                    message: err.message,
                });
            } else {
                this.response.status(err.status || 400).send({
                    message: 'Erro ao fazer login. Contate o suporte',
                });
            }

            return {
                errors: err.erros || [],
                message: err.message,
                status: 400
            };
        }
    }
}

export default LoginController;
