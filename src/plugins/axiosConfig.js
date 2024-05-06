import axios from 'axios';

const URL_SERVICIO_BACKEND_SUMINISTROS = window.__APP_CONFIG__
    ? window.__APP_CONFIG__.VITE_API_BASE_URL_JAVA_BACKEND
    : import.meta.env.VITE_API_BASE_URL_JAVA_BACKEND;

const axiosInstanceBackedValores = axios.create({
    baseURL: URL_SERVICIO_BACKEND_SUMINISTROS
});

export default axiosInstanceBackedValores;