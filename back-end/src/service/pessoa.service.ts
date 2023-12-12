import * as database from '../database/index'
import { Op } from "sequelize";
import BasicService from './basic.service';

class PessoaService extends BasicService {
    model: string;

    constructor() {
        super();
        this.model = 'CheckIn';
    }

    async teste(): Promise<Array<Object>> {
        try {
            return [{ message: 'teste'}];
        } catch (err: any) {

            throw err;
        }
    }
}

export default PessoaService;
