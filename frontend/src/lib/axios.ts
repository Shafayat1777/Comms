import axios, { AxiosResponse } from 'axios';
import Cookies from 'js-cookie';

import { IResponse } from '@/types/data';

import { Toast } from './toast';
import { IApi } from '@/types';

const instance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000/api', // your API URL
});

instance.interceptors.request.use((config) => {
    const token = Cookies.get('c-auth');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

export default instance;

export const api = async <Req, res>(
    config: IApi<Req>,
): Promise<AxiosResponse<IResponse<res>>> => {
    const { type, url, data } = config;
    return await instance[type]<IResponse<res>>(url, data);
};

export const apiError = (error: unknown) => {
    if (axios.isAxiosError(error)) {
        const toast = error.response?.data?.toast;
        if (toast) {
            Toast(toast);
        } else {
            Toast({
                type: 'error',
                status: error.response?.status || 500,
                message: 'An unknown error occurred',
            });
        }
    } else {
        Toast({
            type: 'error',
            status: 500,
            message: 'Unexpected error occurred',
        });
    }
};
