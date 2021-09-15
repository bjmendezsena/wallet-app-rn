import axios from 'axios';

const apiInstance = axios.create({
    baseURL: 'http://127.0.0.1:8080',
    headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
    },
    responseType: 'json'
});

export { apiInstance };
