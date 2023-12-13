import * as database from '../database/index';
import * as repositoryHelper from '../helper/repository.helper';
import { Transaction } from 'sequelize';

    const CONSULTA_MODEL = "Consulta"
    const PRONTUARIO_MODEL ="Prontuario"
    const PACIENTE_MODEL ="Paciente"

class EnderecoService {
    protected transaction!: Transaction

    constructor() {}

    async create( enderecoData: CreateConsulta): Promise<object> {
        try {
            
            let endereco = await database.default.db[CONSULTA_MODEL].create(enderecoData, { transaction: this.transaction });
            
            return endereco; 
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
            const result = await database.default.db[CONSULTA_MODEL].findAll();
            return result;
        } catch (err: any) {
            throw err;
        }
    }

    async getByFilters(filters: ListConsultaPosssibleFilters): Promise<object> {
        try {
            
            let result = await database.default.db[CONSULTA_MODEL].findOne({
                where: { ...filters}
            });

            return result;
        } catch (err: any) {
            throw err;
        }
    }

    async delete(filters: ListConsultaPosssibleFilters): Promise<void> {
        try {
            
            await database.default.db[CONSULTA_MODEL].destroy({
                where: {...filters  }
            });

        } catch (err: any) {
            throw err;
        }
    }

    async update(enderecoData: CreateConsulta,filters: ListConsultaPosssibleFilters){
        let result = await database.default.db[CONSULTA_MODEL].update({enderecoData},{where:filters})
        return result
    }
}

export default EnderecoService;
