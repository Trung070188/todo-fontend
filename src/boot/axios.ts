import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

class ConfigAxios {
  protected baseUrl: string;
  protected axiosInstance: AxiosInstance;

  constructor() {
    this.baseUrl = import.meta.env.VITE_APP_URL;
    this.axiosInstance = axios.create();
  }

  protected getToken(): string | null {
    return localStorage.getItem("token");
  }

  protected setToken(token: string): void {
    localStorage.setItem("token", token);
  }

  protected removeToken(): void {
    localStorage.removeItem("token");
  }

  protected async handleRequest<T>(config: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    const token = this.getToken();

    if (token) {
      if (!config.headers) config.headers = {};
      config.headers["Authorization"] = `Bearer ${token}`;
    }

    const response = await this.axiosInstance(config);
    return response;
  }

  public async get<T>(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    return this.handleRequest<T>({ method: "GET", url: this.baseUrl + url, ...config });
  }

  public async post<T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    console.log("data: " + data);
    return this.handleRequest<T>({ method: "POST", url: this.baseUrl + url, data, ...config });
  }

  public async put<T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    return this.handleRequest<T>({ method: "PUT", url: this.baseUrl + url, data, ...config });
  }

  public async delete<T>(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    return this.handleRequest<T>({ method: "DELETE", url: this.baseUrl + url, ...config });
  }
}

export { ConfigAxios };
