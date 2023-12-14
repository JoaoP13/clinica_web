import * as database from '../database/index';
import * as repositoryHelper from '../helper/repository.helper';
import { Transaction } from 'sequelize';

    const CARGO_MODEL ="Cargo"
    const PRONTUARIO_MODEL ="Prontuario"
    const PACIENTE_MODEL ="Paciente"

class CargoService {
    protected transaction!: Transaction

    constructor() {}

    async create( cargoData: CreateCargo): Promise<object> {
        try {
            
            let cargoDataModel = await database.default.db[CARGO_MODEL].create(cargoData, { transaction: this.transaction });
            
            return cargoDataModel; 

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
            const result = await database.default.db[CARGO_MODEL].findAll();
            return result;
        } catch (err: any) {
            throw err;
        }
    }

    async getByFilters(filters: object): Promise<object> {
        try {
            
            let result = await database.default.db[CARGO_MODEL].findOne({
                where: { ...filters}
            });

            return result;
        } catch (err: any) {
            throw err;
        }
    }

    async delete(idName: string): Promise<void> {
        try {
            
            await database.default.db[CARGO_MODEL].destroy({
                where: { id:idName }
            });

        } catch (err: any) {
            throw err;
        }
    }

    async update(enderecoData: CreateEnderecoPessoal,filters: ListEnderecoPosssibleFilters){
        let result = await database.default.db[CARGO_MODEL].update({enderecoData},{where:filters})
        return result
    }
}

export default CargoService;