/// <reference path="../types/main.d.ts" />
import { Request, Response } from 'express';
import PacienteService from '../service/paciente.service';

class PacienteController {
    pacienteService: PacienteService;
    request: Request;
    response: Response;
    model!: string;

    public constructor(req: Request, res: Response) {
        this.pacienteService = new PacienteService();
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
                telefone: this.request.body.telefone
            }
            const prontuarioModel: CreateProntuario = {
                anamnese: "sem informação",
                medicamentosAdministrados: "sem informação",
                pressaoArterial: 0,
                glicemia: 0,
                peso: 0,
                altura: 0,
            }
            const result = await this.pacienteService.create(pessoaModel,prontuarioModel);

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
    async list(model: any = undefined): Promise<object[] | object> {
        try {
            const result = await this.pacienteService.list(this.model || model);

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

    async delete(model: any = undefined, filters: object = {}): Promise<void | object> {
        try {
            await this.pacienteService.delete(this.model || model, filters);
            
        } catch (err: any) {

            return {
                errors: err.erros || [],
                message: err.message,
                status: 400
            };
        }
    }
}

export default PacienteController;
