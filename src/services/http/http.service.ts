const headers = {
  Accept: 'application/json, text/plain, */*',
  Cookie: 'refreshToken=Eblo',
  'Content-Type': 'application/json;charset=utf-8',
}
const baseUrl = `${process.env.NEXT_PUBLIC_BACKEND_URL}`
class HttpService {
  async fetch(url: string, options?: Request): Promise<Response> {
    const response = await fetch(baseUrl + url, {
      credentials: 'include',
      headers,
      ...options,
    })
    const data = await response.json()
    if (response.ok) {
      return data
    }
    throw data
  }

  async post<T>(url: string, data?: unknown, options?: Request): Promise<T> {
    const response = await this.fetch(url, {
      method: 'POST',
      body: JSON.stringify(data),
      ...options,
    })

    return response as T
  }

  async get<T>(url: string, options?: Request): Promise<T> {
    const response = await this.fetch(url, {
      method: 'GET',
      ...options,
    })
    return response as T
  }

  async put<T>(url: string, data?: unknown, options?: Request): Promise<T> {
    const response = await this.fetch(url, {
      method: 'PUT',
      body: JSON.stringify(data),
      ...options,
    })
    return response as T
  }

  async patch<T>(url: string, data?: unknown, options?: Request): Promise<T> {
    const response = await this.fetch(url, {
      method: 'PATCH',
      body: JSON.stringify(data),
      ...options,
    })
    return response as T
  }

  async delete<T>(url: string, options?: Request): Promise<void> {
    await this.fetch(url, {
      method: 'DELETE',
      ...options,
    })
  }
}

export default new HttpService()
