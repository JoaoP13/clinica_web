/// <reference path="../types/main.d.ts" />

import { Request, Response } from 'express';
import BasicController from './basic.controller';
import PessoaService from '../service/pessoa.service';

class PessoaController extends BasicController {
    pessoaService: PessoaService;

    public constructor(req: Request, res: Response) {
        super(req, res);
        this.pessoaService = new PessoaService();
    }

    async teste(): Promise<object> {
        const {
            invoice,
            initDate,
            finalDate
        } = this.request.query;
        
        try {
            const result = await this.pessoaService.teste();

            return result;
        } catch (err: any) {
            return {
                errors: err.erros || [],
                message: err.message,
                status: 400
            };
        }
    }
}

export default PessoaController;
