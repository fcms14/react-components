import $http from "../services/http";

abstract class Entity {
    endpoint: string;

    constructor(endpoint: string) {
        this.endpoint = endpoint
    }

    async get<T>(url?: string, params?: any) {
        const endpoint = `${this.endpoint}${url && url}`
        const { data } = await $http.get<T>(endpoint, params)

        return data
    }

    async find<T>(url?: string, id?: string) {
        const endpoint = `${this.endpoint}${url && url}${id && `/${id}`}`
        const { data } = await $http.get<T>(endpoint)

        return data
    }

    async post<T>(url?: string, params?: any) {
        const endpoint = `${this.endpoint}${url && url}`
        const { data } = await $http.post<T>(endpoint, params)

        return data
    }

    async download<T>(url: string, params: any) {
        const endpoint = `${this.endpoint}${url}`
        const { data } = await $http.download<T>(endpoint, params)

        return data
    }

    async update<T>(url?: string, params?: any, id?: string) {
        const endpoint = `${this.endpoint}${url && url}${id ? `/${id}` : ''}`
        const { data } = await $http.update<T>(endpoint, params)

        return data
    }

    async delete<T>(url?: string, id?: string, params?: any) {
        const endpoint = `${this.endpoint}${url && url}${id ? `/${id}` : ''}`
        const { data } = await $http.delete<T>(endpoint, params)

        return data
    }
}

export default Entity