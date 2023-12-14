/* eslint-disable react-hooks/rules-of-hooks */
import { get } from './api';
import RequestError from './errors/RequestError';

async function listarClinicas() {
    const result: any = await get('/api/clinica/get');

    if (result?.status === 400 || result?.status === 401 || result?.status === 500) {
        throw new RequestError(result.message, result.status);
    }

    return result;
}

export {
    listarClinicas,
};
