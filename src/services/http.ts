import api from "./api.config"

const $http = {
    get: async <T>(url: string, params?: any) => await api.get<T>(`${url}`, { params: params, headers: {} }),
    post: async <T>(url: string, payload?: any) => await api.post<T>(`${url}`, payload, { headers: {} }),
    postForm: async <T>(url: string, payload?: any, config?: any) => await api.postForm<T>(`${url}`, payload, config),
    update: async <T>(url: string, payload?: any) => await api.put<T>(`${url}`, payload),
    download: async <T>(url: string, payload?: any) => await api.post<T>(`${url}`, payload, { responseType: 'blob' }),
    delete: async <T>(url: string, payload?: any) => await api.delete<T>(`${url}`, payload),
}

export default $http
