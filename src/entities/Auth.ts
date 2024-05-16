import Entity from "./Entity";

export interface AuthInterface {
    login: string
    password?: string
}

interface AuthResponse {
    access_token: string
}

class Auth extends Entity {
    constructor() {
        const target = import.meta.env.VITE_API_URL
        const endpoint = `${target}/auth`
        super(endpoint)
    }

    login = (body: AuthInterface) => this.post<AuthResponse>(`/login`, body)
}

export const newAuth = new Auth