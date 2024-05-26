import axios from 'axios';
import { BASE_URL } from '@/config/api-urls';

export const api = axios.create({
    baseURL: BASE_URL,
    withCredentials: true
});
