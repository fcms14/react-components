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
        const target = import.meta.env.VITE_API_BINANCE
        const endpoint = `${target}/api/v3`
        super(endpoint)
    }

    getBook = ({ symbol, limit }: DepthInterface) => this.get<OrderBookResponse>(`/depth?symbol=${symbol}&limit=${limit ?? 50}`)

}

export const newOrderBook = new OrderBook