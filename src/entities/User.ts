export interface UserRespose {
    uuid: string;
    name: string;
    login: string;
    active: boolean;
    document: string;
    email: string;
    phone: string;
    birthday: Date | null;
    logo?: string | null;
    logo_width?: number | null;
    created_at: Date;
    updated_at: Date;
    deleted_at: Date | null;
}