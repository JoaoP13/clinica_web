/// <reference path="../types/main.d.ts" />
import { Request, Response } from 'express';
import EnderecoService from '../service/endereco.servive';

class EnderecoController {
    enderecoService: EnderecoService;
    request: Request;
    response: Response;
    model!: string;

    public constructor(req: Request, res: Response) {
        this.enderecoService = new EnderecoService();
        this.request = req;
        this.response = res;
    }

    async create(): Promise<object[] | object> {
        try {
            const enderecoModel: CreateEndereco = {
                logradouro: this.request.body.nome,
                complemento: this.request.body.email,
                bairro: this.request.body.data_nascimento,
                cidade: this.request.body.senha,
                estado: this.request.body.telefone,
                nomeEndereco: this.request.body.cpf
            }
            
            const result = await this.enderecoService.create(enderecoModel);

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
            const result = await this.enderecoService.list();

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
                logradouro: this.request.body.nome,
                complemento: this.request.body.email,
                bairro: this.request.body.data_nascimento,
                cidade: this.request.body.senha,
                estado: this.request.body.telefone,
                nomeEndereco: this.request.body.cpf
            }
            const result = await this.enderecoService.getByFilters(enderecoFilters);

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
            const enderecoModel: CreateEndereco = {
                logradouro: this.request.body.nome,
                complemento: this.request.body.email,
                bairro: this.request.body.data_nascimento,
                cidade: this.request.body.senha,
                estado: this.request.body.telefone,
                nomeEndereco: this.request.body.cpf
            }
            const enderecoFilters: ListEnderecoPosssibleFilters = {
                logradouro: this.request.body.nome,
                complemento: this.request.body.email,
                bairro: this.request.body.data_nascimento,
                cidade: this.request.body.senha,
                estado: this.request.body.telefone,
                nomeEndereco: this.request.body.cpf
            }
            
            const result = await this.enderecoService.update(enderecoModel,enderecoFilters);

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
                logradouro: this.request.body.nome,
                complemento: this.request.body.email,
                bairro: this.request.body.data_nascimento,
                cidade: this.request.body.senha,
                estado: this.request.body.telefone,
                nomeEndereco: this.request.body.cpf
            }
            
            const result = await this.enderecoService.delete(enderecoFilters);
            
        } catch (err: any) {

            return {
                errors: err.erros || [],
                message: err.message,
                status: 400
            };
        }
    }
}

export default EnderecoController;
