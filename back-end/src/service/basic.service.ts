import * as database from '../database/index';
import * as repositoryHelper from '../helper/repository.helper';
import { Transaction } from 'sequelize';

class BasicService {
    protected transaction!: Transaction

    constructor() {}

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

export default BasicService;
