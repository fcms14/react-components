import Api from "./Api"

export interface AuthInterface {
    login: string
    password?: string
}

interface AuthResponse {
    access_token: string
}

class Auth extends Api {
    constructor() {
        super('/auth')
    }

    login = (body: AuthInterface) => this.post<AuthResponse, any, AuthInterface>({ path: '/login', body: body })
}

export default Auth