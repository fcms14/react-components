import Api from "./Api"

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
    status: keyof OrderStatus
    type: keyof OrderType
    side: keyof OrderSide
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
    status: keyof OrderStatus
}

export interface ListInterface {
    status: keyof OrderStatus
}

export interface PlaceOrder {
    account_debit: string
    account_credit: string
    amount: number
    price: number
    type: string
    side: string
}

class Order extends Api {
    constructor() {
        super('/order')
    }

    list = (uuid: string, params: ListInterface) => this.get<OrderResponse[], ListInterface>({ path: `/${uuid}`, params: params })

    place = (body: PlaceOrder) => this.post<SseOrder, any, PlaceOrder>({ path: '', body: body })

    cancel = (uuid: string) => this.delete<OrderResponse>({ path: `/${uuid}` })
}

export default Order