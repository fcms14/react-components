import Http from "../services/Http"

class Api extends Http {
  constructor(path?: string) {
    const token = localStorage.getItem('token')

    super({
      baseURL: `${import.meta.env.VITE_API}${path}`,
      headers: { Authorization: `Bearer ${token}` }
    })
  }
}

export default Api