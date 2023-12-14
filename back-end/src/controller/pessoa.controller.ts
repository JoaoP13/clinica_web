/// <reference path="../types/main.d.ts" />
import { Request, Response } from 'express';
import PessoaService from '../service/pessoa.service';

class PessoaController {
    pessoaService: PessoaService;
    request: Request;
    response: Response;
    model!: string;

    public constructor(req: Request, res: Response) {
        this.pessoaService = new PessoaService();
        this.request = req;
        this.response = res;
    }

    async create(): Promise<object[] | object> {
        try {
            const pessoaModel: CreatePessoa = {
                nome: this.request.body.nome,
                email: this.request.body.email,
                data_nascimento: this.request.body.data_nascimento,
                senha: this.request.body.senha,
                telefone: this.request.body.telefone,
                cpf: this.request.body.cpf
            }

            const result = await this.pessoaService.create(pessoaModel);

            return result;
        } catch (err: any) {
            
            return {
                errors: err.erros || [],
                message: err.message,
                status: 400,
                errorType: err?.errorType
            };
        }
    }

    async list(): Promise<object[] | object> {
        try {
            const result = await this.pessoaService.list();

            return result;
        } catch (err: any) {
            
            return {
                errors: err.erros || [],
                message: err.message,
                status: 400,
                errorType: err?.errorType
            };
        }
    }
    async getByCpf(cpf: string): Promise<object[] | object> {

        try {
            const result = await this.pessoaService.getByCpf(cpf);

            return result;
        } catch (err: any) {
            
            return {
                errors: err.erros || [],
                message: err.message,
                status: 400,
                errorType: err?.errorType
            };
        }
    }
    async update(): Promise<object[] | object> {
        try {
            const pessoaModel: CreatePessoa = {
                nome: this.request.body.nome,
                email: this.request.body.email,
                data_nascimento: this.request.body.data_nascimento,
                senha: this.request.body.senha,
                telefone: this.request.body.telefone,
                cpf: this.request.body.cpf
            }

            const result = await this.pessoaService.create(pessoaModel);

            return result;
        } catch (err: any) {
            
            return {
                errors: err.erros || [],
                message: err.message,
                status: 400,
                errorType: err?.errorType
            };
        }
    }
    async delete(cpf: string): Promise<void | object> {
        try {
            await this.pessoaService.delete(cpf );
            
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
