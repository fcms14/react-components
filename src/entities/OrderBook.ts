import Entity from "./Entity";

interface DepthInterface {
    symbol: string
}

class OrderBook extends Entity {
    constructor() {
        const endpoint = 'https://api.binance.com/api/v3'
        super(endpoint)
    }

    getBook = (data: DepthInterface) => this.get(`/depth?symbol=${data.symbol}&limit=1000`)

}

export const newOrderBook = new OrderBook