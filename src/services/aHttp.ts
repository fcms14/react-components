import { AxiosRequestConfig } from "axios"
import api from "../services/api.config"

interface HttpInterface<P = any, B = any> {
    path: string,
    params?: P,
    body?: B
}

abstract class Http {
    config: AxiosRequestConfig

    constructor(config: AxiosRequestConfig) {
        this.config = config
    }

    async get<R, P = any>({ path, params }: HttpInterface<P>) {
        const { data } = await api.get<R>(
            path,
            { ...this.config, params }
        )

        return data
    }
    async delete<R, P = any>({ path, params }: HttpInterface<P>) {
        const { data } = await api.delete<R>(
            path,
            { ...this.config, params }
        )

        return data
    }
    async post<R, P = any, B = any>({ path, params, body }: HttpInterface<P, B>) {
        const { data } = await api.post<R>(
            path,
            body,
            { ...this.config, params }
        )

        return data
    }
    async put<R, P = any, B = any>({ path, params, body }: HttpInterface<P, B>) {
        const { data } = await api.put<R>(
            path,
            body,
            { ...this.config, params }
        )

        return data
    }
    async download<R, P = any, B = any>({ path, params, body }: HttpInterface<P, B>) {
        const { data } = await api.post<R>(
            path,
            body,
            { ...this.config, params, responseType: 'blob' }
        )

        return data
    }
}

export default Http