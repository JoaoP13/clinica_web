/* eslint-disable react-hooks/rules-of-hooks */
import { get } from './api';
import RequestError from './errors/RequestError';

async function login(email: string, password: string) {
    const user: any = await get('/api/login', { email, password });
    
    if (user?.status === 400 || user?.status === 500) {
        throw new RequestError(user.message, user.status);
    }

    localStorage.setItem('user', JSON.stringify(user));
    return user;
}

export default login;
