import $http from "../services/http";

abstract class Entity {
    endpoint: string;

    constructor(endpoint: string) {
        this.endpoint = endpoint
    }

    async get(url?: string, params?: any) {
        const endpoint = `${this.endpoint}${url && url}`

        return await $http.get(endpoint, params)
    }

    async find(url?: string, id?: string) {
        const endpoint = `${this.endpoint}${url && url}${id && `/${id}`}`
        
        return await $http.get(endpoint)
    }

    async post(url?: string, params?: any) {
        const endpoint = `${this.endpoint}${url && url}`

        return await $http.post(endpoint, params)
    }

    async download(url: string, params: any) {
        const endpoint = `${this.endpoint}${url}`

        return await $http.download(endpoint, params)
    }

    async update(url?: string, params?: any, id?: string) {
        const endpoint = `${this.endpoint}${url && url}${id ? `/${id}` : ''}`

        return await $http.update(endpoint, params)
    }

    async delete(url?: string, id?: string, params?: any) {
        const endpoint = `${this.endpoint}${url && url}${id ? `/${id}` : ''}`

        return await $http.delete(endpoint, params)
    }
}

export default Entity