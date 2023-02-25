import {API_URL} from '../../config';

const headers = {
  Accept: 'application/json, text/plain, */*',
  'Content-Type': 'application/json;charset=utf-8',
};

const baseUrl = API_URL + '/api';

class HttpService {
  async fetch(url: string, options?: any): Promise<Response> {
    const response = await fetch(baseUrl + url, {
      credentials: 'include',
      headers,
      ...options,
    });
    const data = await response.json();
    if (!response.ok) {
      throw data;
    }

    return data;
  }

  async post<T>(url: string, data?: unknown, options?: any): Promise<T> {
    const response = await this.fetch(url, {
      method: 'POST',
      body: JSON.stringify(data),
      ...options,
    });

    return response as T;
  }

  async get<T>(url: string, options?: any): Promise<T> {
    const response = await this.fetch(url, {
      method: 'GET',
      ...options,
    });
    return response as T;
  }

  async put<T>(url: string, data?: unknown, options?: any): Promise<T> {
    const response = await this.fetch(url, {
      method: 'PUT',
      body: JSON.stringify(data),
      ...options,
    });
    return response as T;
  }

  async patch<T>(url: string, data?: unknown, options?: any): Promise<T> {
    const response = await this.fetch(url, {
      method: 'PATCH',
      body: JSON.stringify(data),
      ...options,
    });
    return response as T;
  }

  async delete<T>(url: string, options?: any): Promise<void> {
    await this.fetch(url, {
      method: 'DELETE',
      ...options,
    });
  }
}

export default new HttpService();
