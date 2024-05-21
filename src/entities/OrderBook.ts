import ApiBinance from "./ApiBinance"

interface DepthInterface {
    symbol: string
    limit: number
}

interface OrderBookResponse {
    lastUpdateId: number
    bids: string[][]
    asks: string[][]
}

class OrderBook extends ApiBinance {
    constructor() {
        super('/api/v3/depth')
    }

    list = (params: DepthInterface) => this.get<OrderBookResponse, DepthInterface>({ path: '', params: params })
}

export default OrderBook