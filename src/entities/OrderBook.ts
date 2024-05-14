import Entity from "./Entity";

interface DepthInterface {
    symbol: string
    limit?: number
}

interface OrderBookResponse {
    lastUpdateId: number
    bids: string[][]
    asks: string[][]
}

class OrderBook extends Entity {
    constructor() {
        const endpoint = 'https://api.binance.com/api/v3'
        super(endpoint)
    }

    getBook = ({ symbol, limit }: DepthInterface) => this.get<OrderBookResponse>(`/depth?symbol=${symbol}&limit=${limit ?? 50}`)

}

export const newOrderBook = new OrderBook