/// <reference path="../types/main.d.ts" />
import { Request, Response } from 'express';
import MedicoService from '../service/medico.service';

class MedicoController {
    medicoService: MedicoService;
    request: Request;
    response: Response;
    model!: string;

    public constructor(req: Request, res: Response) {
        this.medicoService = new MedicoService();
        this.request = req;
        this.response = res;
    }

    async create(): Promise<object[] | object> {
        try {
            const medicoModel: CreateMedico = {
                idEspecialidade: this.request.body.idEspecialidade,
                crm: this.request.body.crm,
            }
            
            const result = await this.medicoService.create(medicoModel);

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
            const result = await this.medicoService.list();

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
            const medicoFilters: ListMedicoPosssibleFilters = {
                idEspecialidade: this.request.body.idEspecialidade,
                crm: this.request.body.crm,
            }
            const result = await this.medicoService.getByFilters(medicoFilters);

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
            const medicoModel: CreateMedico = {
                idEspecialidade: this.request.body.idEspecialidade,
                crm: this.request.body.crm,
            }
            const medicoFilters: ListMedicoPosssibleFilters = {
                idEspecialidade: this.request.body.idEspecialidade,
                crm: this.request.body.crm,
            }
            
            const result = await this.medicoService.update(medicoModel,medicoFilters);

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
            const medicoFilters: ListMedicoPosssibleFilters = {
                idEspecialidade: this.request.body.idEspecialidade,
                crm: this.request.body.crm,
            }
            
            const result = await this.medicoService.delete(medicoFilters);
            
        } catch (err: any) {

            return {
                errors: err.erros || [],
                message: err.message,
                status: 400
            };
        }
    }
}

export default MedicoController;
