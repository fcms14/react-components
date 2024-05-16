import Entity from "./Entity";
import { UserRespose } from "./User";

export interface UserAccountResponse {
    uuid: string;
    user_uuid: string;
    name: string;
    fee_services?: any;
    pix_key: string;
    balance: number;
    available: number;
    locked: number;
    automatic: Boolean;
    daily_at: number;
    instantly: Boolean;
    created_at: Date;
    updated_at: Date;
    deleted_at?: Date;
    is_default: Boolean;
    User?: UserRespose;
}

class UserAccount extends Entity {
    constructor() {
        const target = import.meta.env.VITE_API_URL
        const endpoint = `${target}/user-account`
        super(endpoint)
    }

    list = () => this.get<UserAccountResponse[]>('')

}

export const newUserAccount = new UserAccount