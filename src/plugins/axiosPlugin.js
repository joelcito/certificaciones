import axios from './axios';

export default {
    install: (app) => {
        app.config.globalProperties.$axios = axios; // Agrega axios como propiedad global
    },
};