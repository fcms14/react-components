import { RoutesInterface } from "../interfaces"
import Api from "./Api"

export interface AuthInterface {
    login: string
    password?: string
}

interface AuthResponse {
    access_token: string
    routes: RoutesInterface[]
}

interface ProfileResponse {
    routes: RoutesInterface[]
}

class Auth extends Api {
    constructor() {
        super('/auth')
    }

    login = (body: AuthInterface) => this.post<AuthResponse, any, AuthInterface>({ path: '/login', body: body })

    profile = () => this.get<ProfileResponse>({ path: '/profile' })
}

export default Auth