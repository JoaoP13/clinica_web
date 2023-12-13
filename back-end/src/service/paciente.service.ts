import * as database from '../database/index';
import * as repositoryHelper from '../helper/repository.helper';
import { Transaction } from 'sequelize';

    const PESSOA_MODEL ="Pessoa"
    const PRONTUARIO_MODEL ="Prontuario"
    const PACIENTE_MODEL ="Paciente"

class PacienteService {
    protected transaction!: Transaction

    constructor() {}

    async create( pessoaData: CreatePessoa, prontuarioData: CreateProntuario): Promise<object> {
        try {
            console.log("asdasds")
            console.log(pessoaData.data_nascimento)
            let pessoa = await database.default.db[PESSOA_MODEL].findOne({
                where: { telefone: pessoaData.telefone}
            });
            if (!pessoa) {
                console.log("asdsdsdsdsdsdasds")
                pessoa = await database.default.db[PESSOA_MODEL].create(pessoaData, { transaction: this.transaction });
            }
            let prontuario = await database.default.db[PRONTUARIO_MODEL].create(prontuarioData, { transaction: this.transaction });
            let paciente = await database.default.db[PACIENTE_MODEL].create(
                { idPessoa: pessoa.id, idProntuario: prontuario.id}, 
                { transaction: this.transaction }
            );
            return paciente; 
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

    async list(model: string): Promise<object[]> {
        try {
            const result = await database.default.db[model].findAll();

            return result;
        } catch (err: any) {
            throw err;
        }
    }

    async getById(model: string, id: number): Promise<object> {
        try {
            const result = await database.default.db[model].findByPk(id);

            return result;
        } catch (err: any) {
            throw err;
        }
    }

    async delete(model: string, filters: object): Promise<void> {
        try {
            await database.default.db[model].destroy({
                where: {
                    ...filters
                }
            });
        } catch (err: any) {
            throw err;
        }
    }
}

export default PacienteService;
