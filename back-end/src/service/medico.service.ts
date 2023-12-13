import * as database from '../database/index';
import * as repositoryHelper from '../helper/repository.helper';
import { Transaction } from 'sequelize';

    const MEDICO_MODEL ="Medico"

class MedicoService {
    protected transaction!: Transaction

    constructor() {}

    async create( medicoData: CreateMedico): Promise<object> {
        try {
            
            let medico = await database.default.db[MEDICO_MODEL].create(medicoData, { transaction: this.transaction });
            
            return medico; 
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
            const result = await database.default.db[MEDICO_MODEL].findAll();
            return result;
        } catch (err: any) {
            throw err;
        }
    }

    async getByFilters(filters: object): Promise<object> {
        try {
            
            let result = await database.default.db[MEDICO_MODEL].findOne({
                where: { ...filters}
            });

            return result;
        } catch (err: any) {
            throw err;
        }
    }

    async delete(filters: ListMedicoPosssibleFilters): Promise<void> {
        try {
            
            await database.default.db[MEDICO_MODEL].destroy({
                where: {...filters  }
            });

        } catch (err: any) {
            throw err;
        }
    }

    async update(medicoData: CreateMedico,filters: ListMedicoPosssibleFilters){
        let result = await database.default.db[MEDICO_MODEL].update({medicoData},{where:filters})
        return result
    }
}

export default MedicoService;
