import Api from "./Api";
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

class UserAccount extends Api {
    constructor() {
        super('/user-account')
    }

    list = () => this.get<UserAccountResponse[]>({ path: '' })
}

export default UserAccount