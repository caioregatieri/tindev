import axios from 'axios';

export const baseURL = 'http://a45ddfd3.ngrok.io';

const api = axios.create({
    baseURL
});

export default api;