/* eslint-disable react-hooks/rules-of-hooks */
import { get, post, patch } from './api';
import RequestError from './errors/RequestError';

async function updateUser(payload: any) {
    const result: any = await patch('/api/user', payload);

    if (result?.status === 400 || result?.status === 401 || result?.status === 500) {
        throw new RequestError(result.message, result.status);
    }

    return result;
}

async function createUser(payload: any) {
    const result: any = await post('/api/user', payload);

    if (result?.status === 400 || result?.status === 401 || result?.status === 500) {
        throw new RequestError(result.message, result.status);
    }

    return result;
}

async function getAllUsers() {
    const result: any = await get('/api/user');

    if (result?.status === 400 || result?.status === 401 || result?.status === 500) {
        throw new RequestError(result.message, result.status);
    }

    return result;
}

async function getUserById(payload: any) {
    const result: any = await get(`/api/user/${payload.id}`);

    if (result?.status === 400 || result?.status === 401 || result?.status === 500) {
        throw new RequestError(result.message, result.status);
    }

    return result;
}


export {
    createUser,
    getAllUsers,
    getUserById,
    updateUser,
};
