import Entity from "./Entity"

export interface OrderStatus {
    NEW: 'NEW'
    OPEN: 'OPEN'
    PARTIALLY_FILLED: 'PARTIALLY_FILLED'
    PENDING_CANCEL: 'PENDING_CANCEL'
    CANCELED: 'CANCELED'
    REJECTED: 'REJECTED'
    FILLED: 'FILLED'
    EXPIRED: 'EXPIRED'
    EXPIRED_IN_MATCH: 'EXPIRED_IN_MATCH'
    TRADE_PREVENTION: 'TRADE_PREVENTION'
    ERROR: 'ERROR'
}

export interface OrderType {
    MARKET: 'MARKET'
    LIMIT: 'LIMIT'
}


export interface OrderSide {
    BUY: 'BUY'
    SELL: 'SELL'
};

export interface OrderResponse {
    uuid: string
    account_debit: string
    account_credit: string
    amount: number
    price: number
    status: OrderStatus
    type: OrderType
    side: OrderSide
    fee_value: number
    user_fee_id: number
    order_id: number
    data: any
    created_at: Date
    updated_at: Date
    // AccountDebit: UserAccountDepositDTO  
    // AccountCredit: UserAccountDepositDTO  
    // UserFee: UserFeeEntity
}

export interface SseOrder {
    uuid: string
    status: OrderStatus
}

export interface PlaceOrder {
    account_debit: string
    account_credit: string
    amount: number
    price: number
    type: string
    side: string
}

class Order extends Entity {
    constructor() {
        const target = import.meta.env.VITE_API_URL
        const endpoint = `${target}/order`
        super(endpoint)
    }

    list = (uuid: string, status: string) => this.get<OrderResponse[]>(`/${uuid}?status=${status}`)

    place = (body: PlaceOrder) => this.post<SseOrder>('', body)

    cancel = (uuid: string) => this.delete<OrderResponse>(`/${uuid}`)
}

export const newOrder = new Order