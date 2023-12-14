/* eslint-disable react-hooks/rules-of-hooks */
import { get, post, patch } from './api';
import RequestError from './errors/RequestError';

async function criarConsulta(payload: any) {
    const result: any = await post('/api/consulta/create', payload);

    if (result?.status === 400 || result?.status === 401 || result?.status === 500) {
        throw new RequestError(result.message, result.status);
    }

    return result;
}

async function listarConsultas() {
    const result: any = await get('/api/consulta/get');

    if (result?.status === 400 || result?.status === 401 || result?.status === 500) {
        throw new RequestError(result.message, result.status);
    }

    return result;
}

export {
    criarConsulta,
    listarConsultas,
};
