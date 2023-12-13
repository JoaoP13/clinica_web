import * as database from '../database/index';
import * as repositoryHelper from '../helper/repository.helper';
import { Transaction } from 'sequelize';

    const ESPECIALIDADE_MODEL ="Especialidade"
    const PRONTUARIO_MODEL ="Prontuario"
    const PACIENTE_MODEL ="Paciente"

class EspecialidadeService {
    protected transaction!: Transaction

    constructor() {}

    async create( especialidadeData: CreateEspecialidade): Promise<object> {
        try {
            
            let especialidade = await database.default.db[ESPECIALIDADE_MODEL].create(especialidadeData, { transaction: this.transaction });
            
            return especialidade; 
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
            const result = await database.default.db[ESPECIALIDADE_MODEL].findAll();
            return result;
        } catch (err: any) {
            throw err;
        }
    }

    async getByFilters(filters: ListEspecialidadePosssibleFilters): Promise<object> {
        try {
            
            let result = await database.default.db[ESPECIALIDADE_MODEL].findOne({
                where: { ...filters}
            });

            return result;
        } catch (err: any) {
            throw err;
        }
    }

    async delete(filters: ListEspecialidadePosssibleFilters): Promise<void> {
        try {
            
            await database.default.db[ESPECIALIDADE_MODEL].destroy({
                where: {...filters  }
            });

        } catch (err: any) {
            throw err;
        }
    }

    async update(especialidadeData: CreateEspecialidade,filters: ListEspecialidadePosssibleFilters){
        let result = await database.default.db[ESPECIALIDADE_MODEL].update({especialidadeData},{where:filters})
        return result
    }
}

export default EspecialidadeService;
