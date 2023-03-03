import {store} from '../../store';
import {baseUrl} from '../../config';
import {LOGOUT} from '../../store/auth/auth-async.actions';
import HTTP_STATUS from '../../../types';
import {SET_ACCESS_TOKEN} from '../../store/auth/auth.slice';
import {RefreshTokenResponse} from '../../../types/auth.types';

class HttpService {
  getHeaders(barerToken: string, headersOptions?: Headers): Headers {
    const headers = new Headers({
      Accept: 'application/json, text/plain, */*',
      'Content-Type': 'application/json;charset=utf-8',
      Authorization: `Bearer ${barerToken}`,
    });
    headersOptions?.forEach((value: string, key: string) => {
      headers.set(key, value);
    });
    return headers;
  }

  async refreshAccessToken(
    refreshToken: string,
    headers: Headers,
  ): Promise<RefreshTokenResponse> {
    const response = await fetch(baseUrl + '/auth/mobile/refreshtoken', {
      method: 'POST',
      headers,
      body: JSON.stringify({refreshToken}),
    });
    const data = await response.json();

    const dispatch = store.dispatch;

    if (response.status === HTTP_STATUS.OK) {
      dispatch(SET_ACCESS_TOKEN(data.accessToken));
      return data;
    } else {
      dispatch(LOGOUT());
      throw data;
    }
  }

  async reFetch<T = Response>(url: string, options?: any): Promise<T> {
    const dispatch = store.dispatch;
    const token = store.getState().auth.auth.accessToken || '';
    const headers = this.getHeaders(token);

    const response = await fetch(url, {
      headers,
      ...options,
    });

    if (response.status === HTTP_STATUS.UNAUTHORIZED) {
      dispatch(LOGOUT());
      throw new Error('Unauthorized');
    }

    return response.json();
  }

  async fetch<T = Response>(url: string, options?: any): Promise<T> {
    const requestUrl = baseUrl + url;
    const {
      auth: {auth},
    } = store.getState();

    const headers = this.getHeaders(auth.accessToken || '');
    const dispatch = store.dispatch;
    const response = await fetch(requestUrl, {
      headers,
      ...options,
    });

    let data = await response.json();

    if (response.status === HTTP_STATUS.UNAUTHORIZED) {
      if (auth.refreshToken) {
        const refresh = await this.refreshAccessToken(
          auth.refreshToken,
          headers,
        );

        if (refresh) {
          data = await this.reFetch<T>(requestUrl, options);
        }
      } else {
        dispatch(LOGOUT());
      }
    }

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

  async delete(url: string, options?: any): Promise<void> {
    await this.fetch(url, {
      method: 'DELETE',
      ...options,
    });
  }
}

export default new HttpService();
