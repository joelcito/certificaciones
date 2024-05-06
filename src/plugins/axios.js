import Axios from 'axios';

const URL_SERVICIO_BACKEND_CERTIFICATIONS = window.__APP_CONFIG__
    ? window.__APP_CONFIG__.VITE_API_BASE_URL_JAVA_BACKEND
    : import.meta.env.VITE_API_BASE_URL_JAVA_BACKEND;

const axiosInstance = Axios.create({
    baseURL: URL_SERVICIO_BACKEND_CERTIFICATIONS
});

export default axiosInstance;