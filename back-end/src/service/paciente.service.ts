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
            let pessoa = await database.default.db[PESSOA_MODEL].findOne({
                where: { telefone: pessoaData.telefone}
            });
            if (!pessoa) {
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

    async list(): Promise<object[]> {
        try {
            const result = await database.default.db[PACIENTE_MODEL].findAll();
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

            if (pessoa) {
                result = await database.default.db[PACIENTE_MODEL].findOne({
                    where: {id: pessoa.id},
                    include: [
                        {
                            model: database.default.db[PESSOA_MODEL],
                            as: 'Pessoa',
                        },
                        {
                            model: database.default.db[PRONTUARIO_MODEL],
                            as: 'Prontuario',
                        },
                    ]
                })
                
            }
            

            return result;
        } catch (err: any) {
            throw err;
        }
    }

    async delete(cpf: string): Promise<void> {
        try {
            console.log(cpf)
            let pessoa = await database.default.db[PESSOA_MODEL].findOne({
                where: { cpf: cpf}
            });

            if (pessoa) {
                await database.default.db[PACIENTE_MODEL].destroy({
                    where: {id:pessoa.id  }
                });
                await database.default.db[PRONTUARIO_MODEL].destroy({
                    where: {id:pessoa.id  }
                });
                await database.default.db[PESSOA_MODEL].destroy({
                    where: {id:pessoa.id  }
                });
                
            }

        } catch (err: any) {
            throw err;
        }
    }
}

export default PacienteService;
