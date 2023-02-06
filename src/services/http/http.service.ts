const headers = {
  Accept: 'application/json, text/plain, */*',
  'Content-Type': 'application/json;charset=utf-8',
};
// @ts-ignore
//import {BASE_URL} from '@env';

class HttpService {
  async fetch(url: string, options?: any): Promise<Response> {
    const path = 'http://192.168.31.82/api' + url;

    const response = await fetch(path, {
      credentials: 'include',
      headers,
      ...options,
    });

    const data = await response.json();
    if (response.ok) {
      return data;
    }
    throw data;
  }

  async post<T>(url: string, data?: unknown, options?: Request): Promise<T> {
    const response = await this.fetch(url, {
      method: 'POST',
      body: JSON.stringify(data),
      ...options,
    });

    return response as T;
  }

  async get<T>(url: string, options?: Request): Promise<T> {
    const response = await this.fetch(url, {
      method: 'GET',
      ...options,
    });
    return response as T;
  }

  async put<T>(url: string, data?: unknown, options?: Request): Promise<T> {
    const response = await this.fetch(url, {
      method: 'PUT',
      body: JSON.stringify(data),
      ...options,
    });
    return response as T;
  }

  async patch<T>(url: string, data?: unknown, options?: Request): Promise<T> {
    const response = await this.fetch(url, {
      method: 'PATCH',
      body: JSON.stringify(data),
      ...options,
    });
    return response as T;
  }

  async delete(url: string, options?: Request): Promise<void> {
    await this.fetch(url, {
      method: 'DELETE',
      ...options,
    });
  }
}

export default new HttpService();
