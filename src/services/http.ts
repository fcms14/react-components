import api from "./api.config"

const $http = {
    get: async (url: string, params?: any) => await api.get(`${url}`, { params: params, headers: {} }),
    post: async (url: string, payload?: any) => await api.post(`${url}`, payload, { headers: {} }),
    postForm: async (url: string, payload?: any, config?: any) => await api.postForm(`${url}`, payload, config),
    update: async (url: string, payload?: any) => await api.put(`${url}`, payload),
    download: async (url: string, payload?: any) => await api.post(`${url}`, payload, { responseType: 'blob' }),
    delete: async (url: string, payload?: any) => await api.delete(`${url}`, payload),
}

export default $http
