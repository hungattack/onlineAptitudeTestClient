import axios, { AxiosInstance } from 'axios'
axios.defaults.withCredentials = true
class Http {
  instance: AxiosInstance
  constructor() {
    this.instance = axios.create({
      baseURL: process.env.NEXT_PUBLIC_NEGA,
    })
  }
}
const http = new Http().instance
export default http
