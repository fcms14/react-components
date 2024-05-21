import axios from 'axios';
import { dispatchAddNotification } from '../features/toaster/toasterDispatcher';

const api = axios.create({ timeout: 30000 });

api.interceptors.request.use(
    (config) => config,
    (error) => console.log(error)
);

api.interceptors.response.use(
    (response) => response,
    (response) => {
        const data = response?.response?.data ?? response
        const { code, message, shortMessage } = data

        dispatchAddNotification({
            subtitle: message ?? "",
            text: shortMessage ?? "",
            subtext: code ?? "",
            toasterStyle: { type: "error" },
            active: true,
        })

        if (message === 'Unauthorized' && !response?.response?.config?.url.includes("/login")) {
            const language = localStorage.getItem('language') || 'ptbr'
            localStorage.clear()
            localStorage.setItem("language", language)
            window.location.replace('/');
            return ('/')
        }

        return Promise.reject(response?.response ?? response)
    }
);

export default api;
