/// <reference path="../types/main.d.ts" />
import { Request, Response } from 'express';
import EnderecoPessoalService from '../service/enderecoPessoal';

class EnderecoPessoalController {
    enderecoPessoalService: EnderecoPessoalService;
    request: Request;
    response: Response;
    model!: string;

    public constructor(req: Request, res: Response) {
        this.enderecoPessoalService = new EnderecoPessoalService();
        this.request = req;
        this.response = res;
    }

    async create(): Promise<object[] | object> {
        try {
            const enderecoPessoalModel : CreateEnderecoPessoal = {
                idEndereco: this.request.body.logradouro,
                idPessoa: this.request.body.complemento,
            }
            
            const result = await this.enderecoPessoalService.create(enderecoPessoalModel);

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
            const result = await this.enderecoPessoalService.list();

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
            const enderecoFilters: ListEnderecoPosssibleFilters = {
                logradouro: this.request.body.logradouro,
                complemento: this.request.body.complemento,
                bairro: this.request.body.bairro,
                cidade: this.request.body.cidade,
                estado: this.request.body.estado,
                nomeEndereco: this.request.body.nomeEndereco
            }
            const result = await this.enderecoPessoalService.getByFilters(enderecoFilters);

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
            const enderecoPessoalModel : CreateEnderecoPessoal = {
                idEndereco: this.request.body.logradouro,
                idPessoa: this.request.body.complemento,
            }
            const enderecoFilters: ListEnderecoPosssibleFilters = {
                logradouro: this.request.body.logradouro,
                complemento: this.request.body.complemento,
                bairro: this.request.body.bairro,
                cidade: this.request.body.cidade,
                estado: this.request.body.estado,
                nomeEndereco: this.request.body.nomeEndereco
            }
            
            const result = await this.enderecoPessoalService.update(enderecoPessoalModel,enderecoFilters);

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
            const enderecoFilters: ListEnderecoPosssibleFilters = {
                logradouro: this.request.body.logradouro,
                complemento: this.request.body.complemento,
                bairro: this.request.body.bairro,
                cidade: this.request.body.cidade,
                estado: this.request.body.estado,
                nomeEndereco: this.request.body.nomeEndereco
            }
            
            const result = await this.enderecoPessoalService.delete(enderecoFilters);
            
        } catch (err: any) {

            return {
                errors: err.erros || [],
                message: err.message,
                status: 400
            };
        }
    }
}

export default EnderecoPessoalController;