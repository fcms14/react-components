import Http from "../services/Http"

class ApiBinance extends Http {
  constructor(path?: string) {
    super({
      baseURL: `${import.meta.env.VITE_API_BINANCE}${path}`
    })
  }
}

export default ApiBinance