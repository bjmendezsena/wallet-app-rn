import { apiInstance } from './api';

const get = async <T extends Object>(url: string) => {
    const response = await apiInstance.get<T>(url);
    return response.data as T;
};

const post = async <T extends Object>(url: string, data: any) => {
    const response = await apiInstance.post<T>(url, data);
    return response.data as T;
};

const put = async <T extends Object>(url: string, data: any) => {
    const response = await apiInstance.put<T>(url);
    return response.data as T;
};

export const http = {
    get,
    post,
    put
};
