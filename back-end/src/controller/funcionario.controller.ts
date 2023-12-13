/// <reference path="../types/main.d.ts" />
import { Request, Response } from 'express';
import FuncionarioService from '../service/funcionario.service';

class FuncionarioController {
    funcionarioService: FuncionarioService;
    request: Request;
    response: Response;
    model!: string;

    public constructor(req: Request, res: Response) {
        this.funcionarioService = new FuncionarioService();
        this.request = req;
        this.response = res;
    }

    async create(): Promise<object[] | object> {
        try {
            const funcionarioModel: CreateFuncionario = {
                salario: this.request.body.salario,
                idCargo: this.request.body.idCargo,
                idClinica: this.request.body.idClinica,
            }
            
            const result = await this.funcionarioService.create(funcionarioModel);

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
            const result = await this.funcionarioService.list();

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
    async getByFilters(): Promise<object[] | object> {

        try {
            const funcionarioFilters: ListFuncionarioPosssibleFilters = {
                salario: this.request.body.salario,
                idCargo: this.request.body.idCargo,
                idClinica: this.request.body.idClinica,
            }
            const result = await this.funcionarioService.getByFilters(funcionarioFilters);

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
            const funcionarioModel: CreateFuncionario = {
                salario: this.request.body.salario,
                idCargo: this.request.body.idCargo,
                idClinica: this.request.body.idClinica,
            }
            const funcionarioFilters: ListFuncionarioPosssibleFilters = {
                salario: this.request.body.salario,
                idCargo: this.request.body.idCargo,
                idClinica: this.request.body.idClinica,
            }
            
            const result = await this.funcionarioService.update(funcionarioModel,funcionarioFilters);

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
    async delete(): Promise<void | object> {
        try {
            const funcionarioFilters: ListFuncionarioPosssibleFilters = {
                salario: this.request.body.salario,
                idCargo: this.request.body.idCargo,
                idClinica: this.request.body.idClinica,
            }
            
            const result = await this.funcionarioService.delete(funcionarioFilters);
            
        } catch (err: any) {

            return {
                errors: err.erros || [],
                message: err.message,
                status: 400
            };
        }
    }
}

export default FuncionarioController;
