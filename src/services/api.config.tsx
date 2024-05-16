import axios from 'axios';
import { dispatchAddNotification } from '../features/toaster/toasterDispatcher';

const api = axios.create({
    baseURL: "",
});

api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token')
        if (!config.url?.includes("binance") && token) {
            config.headers.Authorization = `Bearer ${token}`
        }

        return config
    },
    (error) => { }
);

api.interceptors.response.use(
    (response) => response,
    ({ response }) => {
        const { code, message, shortMessage } = response.data

        dispatchAddNotification({
            subtitle: message ?? "",
            text: shortMessage ?? "",
            subtext: code ?? "",
            toasterStyle: { type: "error" },
            active: true,
        })

        if (message === 'Unauthorized' && !response.config.url.includes("/auth/login")) {
            const language = localStorage.getItem('language') || 'ptbr'
            localStorage.clear()
            localStorage.setItem("language", language)
            window.location.replace('/');
            return ('/')
        }

        return Promise.reject(response)
    }
);

export default api;
