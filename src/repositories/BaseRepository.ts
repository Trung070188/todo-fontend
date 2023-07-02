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
  protected getById<T>(id: number): Promise<AxiosResponse<T>> {
    return this.axios.get<T>(this.endpoint + "/" + id);
  }

  protected async post<T>(data?: any): Promise<AxiosResponse<T>> {
    try {
      const response = await this.axios.post<T>(this.endpoint, data);
      return response;
    } catch (response: any) {
      throw response;
    }
  }

  protected put<T>(id: number, data?: any): Promise<AxiosResponse<T>> {
    return this.axios.put<T>(this.endpoint + "/" + id, data);
  }

  protected delete<T>(id: number): Promise<AxiosResponse<T>> {
    return this.axios.delete<T>(this.endpoint + "/" + id);
  }
}

export { BaseRepository };
