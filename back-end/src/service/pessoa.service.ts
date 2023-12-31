import * as database from '../database/index';
import * as repositoryHelper from '../helper/repository.helper';
import { Transaction } from 'sequelize';

    const PESSOA_MODEL ="Pessoa"
    const PRONTUARIO_MODEL ="Prontuario"
    const PACIENTE_MODEL ="Paciente"

class PacienteService {
    protected transaction!: Transaction

    constructor() {}

    async create( pessoaData: CreatePessoa): Promise<object> {
        try {
            let pessoa = await database.default.db[PESSOA_MODEL].findOne({
                where: { telefone: pessoaData.telefone}
            });
            if (!pessoa) {
                pessoa = await database.default.db[PESSOA_MODEL].create(pessoaData, { transaction: this.transaction });
            }
            
            return pessoa; 
        } catch (err: any) {
            throw err;
        }
    }

    async setTransaction() {
        try {
            const newTransaction = await repositoryHelper.default.getTransaction();

            return newTransaction;
        } catch (err: any) {
            // Tratar os erros na requisição do front
            throw err;
        }
    }

    async list(): Promise<object[]> {
        try {
            const result = await database.default.db[PESSOA_MODEL].findAll();
            return result;
        } catch (err: any) {
            throw err;
        }
    }

    async getByCpf(cpf: string): Promise<object> {
        try {
            
            let result = Object
            console.log(cpf)
            let pessoa = await database.default.db[PESSOA_MODEL].findOne({
                where: { cpf: cpf}
            });

            return pessoa;
        } catch (err: any) {
            throw err;
        }
    }

    async delete(cpf: string): Promise<void> {
        try {


            await database.default.db[PESSOA_MODEL].destroy({
                where: {cpf:cpf }
            });
     

        } catch (err: any) {
            throw err;
        }
    }
}

export default PacienteService;
