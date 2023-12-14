/* eslint-disable react-hooks/rules-of-hooks */
import { get } from './api';
import RequestError from './errors/RequestError';

async function getOrdersState() {
    const result: any = await get('/api/dashboard/getOrdersState');
    
    if (result?.status === 400 || result?.status === 500) {
        throw new RequestError(result.message, result.status);
    }

    return result;
}

async function getVolumesCollected() {
    const result: any = await get('/api/dashboard/getVolumesCollected');
    
    if (result?.status === 400 || result?.status === 500) {
        throw new RequestError(result.message, result.status);
    }

    return result;
}

async function getAverageCollectTimeDifference() {
    const result: any = await get('/api/dashboard/getAverageCollectTimeDifference');
    
    if (result?.status === 400 || result?.status === 500) {
        throw new RequestError(result.message, result.status);
    }

    return result;
}

async function getNumberOfCheckins() {
    const result: any = await get('/api/dashboard/getNumberOfCheckins');
    
    if (result?.status === 400 || result?.status === 500) {
        throw new RequestError(result.message, result.status);
    }

    return result;
}

export { getOrdersState, getVolumesCollected, getAverageCollectTimeDifference, getNumberOfCheckins };
