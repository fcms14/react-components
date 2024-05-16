import Entity from "./Entity";

export interface OrderResponse {
    uuid: string;
    account_debit: string;
    account_credit: string;
    amount: number;
    price: number,
    status: string; // OrderStatus;  
    type: string; // OrderType;  
    side: string; // OrderSide;  
    fee_value: number;
    user_fee_id: number;
    order_id: number;
    data: any;
    created_at: Date;
    updated_at: Date;
    // AccountDebit: UserAccountDepositDTO;  
    // AccountCredit: UserAccountDepositDTO;  
    // UserFee: UserFeeEntity;
}

export interface PlaceOrder {
    account_debit: string,
    account_credit: string,
    amount: number,
    price: number,
    type: string,
    side: string
}

class Order extends Entity {
    constructor() {
        const target = import.meta.env.VITE_API_URL
        const endpoint = `${target}/order`
        super(endpoint)
    }

    list = (uuid: string, status: string) => this.get<OrderResponse[]>(`/${uuid}?status=${status}`)

    place = (body: PlaceOrder) => this.post<string>('', body)

    cancel = (uuid: string) => this.delete<OrderResponse>(`/${uuid}`)
}

export const newOrder = new Order