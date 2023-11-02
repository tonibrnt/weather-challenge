import axios, { AxiosInstance } from "axios";

class BaseService {
  axios: AxiosInstance;

  constructor() {
    this.axios = axios.create({ baseURL: "https://brasilapi.com.br/api" });
  }
}

export default BaseService;
