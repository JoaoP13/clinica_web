/// <reference path="../types/main.d.ts" />
import * as database from '../database/index';
import * as repositoryHelper from '../helper/repository.helper';
import { Transaction } from 'sequelize';

    const CLINICA_MODEL ="Clinica"
    const ENDERECO_MODEL ="Endereco"

class ClinicaService {
    protected transaction!: Transaction

    constructor() {}

    async create( clinicaData: CreateClinica,  enderecoData: CreateEndereco): Promise<object> {
        try {
            
            let endereco = await database.default.db[ENDERECO_MODEL].create(enderecoData, { transaction: this.transaction });
            clinicaData.idEndereco = endereco.id;
            console.log(clinicaData)
            let clinica = await database.default.db[CLINICA_MODEL].create(clinicaData, { transaction: this.transaction });
            
            return clinica; 
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
            const result = await database.default.db[CLINICA_MODEL].findAll();
            return result;
        } catch (err: any) {
            throw err;
        }
    }

    async getByFilters(filters: object): Promise<object> {
        try {
            
            let result = await database.default.db[CLINICA_MODEL].findOne({
                where: { ...filters}
            });

            return result;
        } catch (err: any) {
            throw err;
        }
    }

    async delete(filters: ListClinicaPosssibleFilters): Promise<void> {
        try {
            
            await database.default.db[CLINICA_MODEL].destroy({
                where: {...filters  }
            });

        } catch (err: any) {
            throw err;
        }
    }

    async update(clinicaData: CreateClinica,filters: ListClinicaPosssibleFilters){
        let result = await database.default.db[CLINICA_MODEL].update({clinicaData},{where:filters})
        return result
    }
}

export default ClinicaService;
