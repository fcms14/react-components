import axios from 'axios';
import { dispatchAddNotification } from '../features/toaster/toasterDispatcher';

const api = axios.create({
    baseURL: "",
});

api.interceptors.request.use(
    (config) => config,
    (error) => console.log(error)
);

api.interceptors.response.use(
    (response) => response,
    ({ response }) => {
        const { code, message, shortMessage } = response.data

        dispatchAddNotification({
            subtitle: message ?? "",
            text: shortMessage ?? "",
            caption: code ?? "",
            toasterStyle: { type: "success" },
            active: true,
        })

        return Promise.reject(response)
    }    
);

export default api;
