/* eslint-disable react-hooks/rules-of-hooks */
import { get } from './api';
import RequestError from './errors/RequestError';

async function listarMedicos() {
    const result: any = await get('/api/medico/get');

    if (result?.status === 400 || result?.status === 401 || result?.status === 500) {
        throw new RequestError(result.message, result.status);
    }

    return result;
}

export {
    listarMedicos,
};
