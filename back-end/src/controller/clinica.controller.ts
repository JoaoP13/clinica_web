/// <reference path="../types/main.d.ts" />
import { Request, Response } from 'express';
import ClinicaService from '../service/clinica.service';

class ClinicaController {
    clinicaService: ClinicaService;
    request: Request;
    response: Response;
    model!: string;

    public constructor(req: Request, res: Response) {
        this.clinicaService = new ClinicaService();
        this.request = req;
        this.response = res;
    }

    async create(): Promise<object[] | object> {
        try {
            const clinicaModel: CreateClinica = {
                idEndereco: this.request.body.idEndereco,
                nome: this.request.body.nome,
                telefone: this.request.body.telefone,
                cnpj: this.request.body.cnpj,
            }
            
            const result = await this.clinicaService.create(clinicaModel);

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
            const result = await this.clinicaService.list();

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
            const clinicaFilters: ListClinicaPosssibleFilters = {
                idEndereco: this.request.body.idEndereco,
                nome: this.request.body.nome,
                telefone: this.request.body.telefone,
                cnpj: this.request.body.cnpj,
            }
            const result = await this.clinicaService.getByFilters(clinicaFilters);

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
            const clinicaModel: CreateClinica = {
                idEndereco: this.request.body.idEndereco,
                nome: this.request.body.nome,
                telefone: this.request.body.telefone,
                cnpj: this.request.body.cnpj,
            }
            const clinicaFilters: ListClinicaPosssibleFilters = {
                idEndereco: this.request.body.idEndereco,
                nome: this.request.body.nome,
                telefone: this.request.body.telefone,
                cnpj: this.request.body.cnpj,
            }
            
            const result = await this.clinicaService.update(clinicaModel,clinicaFilters);

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
            const clinicaFilters: ListClinicaPosssibleFilters = {
                idEndereco: this.request.body.idEndereco,
                nome: this.request.body.nome,
                telefone: this.request.body.telefone,
                cnpj: this.request.body.cnpj,
            }
            
            const result = await this.clinicaService.delete(clinicaFilters);
            
        } catch (err: any) {

            return {
                errors: err.erros || [],
                message: err.message,
                status: 400
            };
        }
    }
}

export default ClinicaController;
