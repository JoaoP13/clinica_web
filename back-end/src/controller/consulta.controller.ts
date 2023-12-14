/// <reference path="../types/main.d.ts" />
import { Request, Response } from 'express';
import ConsultaService from '../service/consulta.service';
import { DATE } from 'sequelize';

class ConsultaController {
    consultaService: ConsultaService;
    request: Request;
    response: Response;
    model!: string;

    public constructor(req: Request, res: Response) {
        this.consultaService = new ConsultaService();
        this.request = req;
        this.response = res;
    }

    async create(): Promise<object[] | object> {
        try {
            const consultaModel: CreateConsulta = {
                dataConsulta: this.request.body.dataConsulta,
                idMedico: this.request.body.idMedico,
                idPaciente:this.request.body.idPaciente,
                idClinica: this.request.body.idClinica,
                idEspecialidade: this.request.body.idEspecialidade
            }
            
            const result = await this.consultaService.create(consultaModel);

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
            const result = await this.consultaService.list();

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
           
            const result = await this.consultaService.getByFilters();

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
            
            
            const result = await this.consultaService.update();

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
            
            
            const result = await this.consultaService.delete();
            
        } catch (err: any) {

            return {
                errors: err.erros || [],
                message: err.message,
                status: 400
            };
        }
    }
}

export default ConsultaController;