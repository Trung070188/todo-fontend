import { AxiosResponse } from "axios";
import { ConfigAxios } from "../boot/axios";

class BaseRepository {
  protected axios: ConfigAxios;
  protected endpoint: string;

  constructor(endpoint: string) {
    this.axios = new ConfigAxios();
    this.endpoint = endpoint;
  }

  protected get<T>(): Promise<AxiosResponse<T>> {
    return this.axios.get<T>(this.endpoint);
  }

  protected post<T>(data?: any): Promise<AxiosResponse<T>> {
    return this.axios.post<T>(this.endpoint, data);
  }

  protected put<T>(data?: any): Promise<AxiosResponse<T>> {
    return this.axios.put<T>(this.endpoint, data);
  }

  protected delete<T>(): Promise<AxiosResponse<T>> {
    return this.axios.delete<T>(this.endpoint);
  }
}

export { BaseRepository };
