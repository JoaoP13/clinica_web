/// <reference path="../types/main.d.ts" />
import { Request, Response } from 'express';
import PacienteService from '../service/paciente.service';
import EspecialidadeService from '../service/especialidade.service';

class EspecialidadeController {
    especialidadeService: EspecialidadeService;
    request: Request;
    response: Response;
    model!: string;

    public constructor(req: Request, res: Response) {
        this.especialidadeService = new EspecialidadeService();
        this.request = req;
        this.response = res;
    }

    async create(): Promise<object[] | object> {
        try {
            const especialidadeModel: CreateEspecialidade = {
                nome: this.request.body.nome,
                valorConsulta: this.request.body.email,
                percentualMedico: this.request.body.data_nascimento,
            }
            
            const result = await this.especialidadeService.create(especialidadeModel);

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
            const result = await this.especialidadeService.list();

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
            const especialidadeFilters: ListEspecialidadePosssibleFilters = {
                nome: this.request.body.nome,
                valorConsulta: this.request.body.email,
                percentualMedico: this.request.body.data_nascimento,

            }
            const result = await this.especialidadeService.getByFilters(especialidadeFilters);

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
            const especialidadeModel: CreateEspecialidade = {
                nome: this.request.body.nome,
                valorConsulta: this.request.body.email,
                percentualMedico: this.request.body.data_nascimento,
            }
            const especialidadeFilters: ListEspecialidadePosssibleFilters = {
                nome: this.request.body.nome,
                valorConsulta: this.request.body.email,
                percentualMedico: this.request.body.data_nascimento,

            }
            
            const result = await this.especialidadeService.update(especialidadeModel,especialidadeFilters);

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
            const especialidadeFilters: ListEspecialidadePosssibleFilters = {
                nome: this.request.body.nome,
                valorConsulta: this.request.body.email,
                percentualMedico: this.request.body.data_nascimento,

            }
            
            const result = await this.especialidadeService.delete(especialidadeFilters);
            
        } catch (err: any) {

            return {
                errors: err.erros || [],
                message: err.message,
                status: 400
            };
        }
    }
}

export default EspecialidadeController;
