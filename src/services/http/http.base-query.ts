import type { BaseQueryFn, FetchArgs, FetchBaseQueryError } from '@reduxjs/toolkit/query'
import { fetchBaseQuery } from '@reduxjs/toolkit/query'

import { RootState, store } from '../../store'
import { LOGOUT, SET_ACCESS_TOKEN } from '../../store/reducers/auth.slice'
import { RefreshTokenResponse } from '../../types/auth.types'

export enum HTTP_METHODS {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  PATCH = 'PATCH',
  DELETE = 'DELETE',
}

const baseQuery = fetchBaseQuery({
  baseUrl: process.env.NEXT_PUBLIC_BACKEND_URL,
  prepareHeaders: (headers, { getState }) => {
    const authState = getState() as RootState

    headers.set('Authorization', `Bearer ${authState.auth?.auth.accessToken}`)

    return headers
  },
})

const baseQueryWithReauth: BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError> = async (
  args,
  api,
  extraOptions
) => {
  let result = await baseQuery(args, api, extraOptions)
  if (result.error && result.error.status === 401) {
    const url = '/auth/refreshtoken'

    const refreshResult = await baseQuery({ url, method: HTTP_METHODS.POST, credentials: 'include' }, api, extraOptions)
    const data = refreshResult.data as RefreshTokenResponse

    if (data) {
      store.dispatch(SET_ACCESS_TOKEN(data.accessToken))
      result = await baseQuery(args, api, extraOptions)
    } else {
      store.dispatch(LOGOUT())
    }
  }
  return result
}

const httpBaseQuery = baseQueryWithReauth

export default httpBaseQuery
