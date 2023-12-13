import * as database from '../database/index';
import * as repositoryHelper from '../helper/repository.helper';
import { Transaction } from 'sequelize';

    const FUNCIONARIO_MODEL ="Funcionario"

class FuncionarioService {
    protected transaction!: Transaction

    constructor() {}

    async create( funcionarioData: CreateFuncionario): Promise<object> {
        try {
            
            let funcionario = await database.default.db[FUNCIONARIO_MODEL].create(funcionarioData, { transaction: this.transaction });
            
            return funcionario; 
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
            const result = await database.default.db[FUNCIONARIO_MODEL].findAll();
            return result;
        } catch (err: any) {
            throw err;
        }
    }

    async getByFilters(filters: object): Promise<object> {
        try {
            
            let result = await database.default.db[FUNCIONARIO_MODEL].findOne({
                where: { ...filters}
            });

            return result;
        } catch (err: any) {
            throw err;
        }
    }

    async delete(filters: ListFuncionarioPosssibleFilters): Promise<void> {
        try {
            
            await database.default.db[FUNCIONARIO_MODEL].destroy({
                where: {...filters  }
            });

        } catch (err: any) {
            throw err;
        }
    }

    async update(funcionarioData: CreateFuncionario,filters: ListFuncionarioPosssibleFilters){
        let result = await database.default.db[FUNCIONARIO_MODEL].update({funcionarioData},{where:filters})
        return result
    }
}

export default FuncionarioService;
