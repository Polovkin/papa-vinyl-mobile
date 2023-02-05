import type {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
} from '@reduxjs/toolkit/query';
import {fetchBaseQuery} from '@reduxjs/toolkit/query';

import {store} from '../../store';
import {LOGOUT, SET_ACCESS_TOKEN} from '../../store/auth/auth.slice';
import AsyncStorageService, {
  STORAGE_KEYS,
} from '../storage/async-storage.service';
import {RefreshTokenResponse} from '../../../types/auth.types';

export enum HTTP_METHODS {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  PATCH = 'PATCH',
  DELETE = 'DELETE',
}

const baseQuery = fetchBaseQuery({
  baseUrl: 'http://192.168.31.221:8080/api',
  prepareHeaders: async headers => {
    const accessToken = await AsyncStorageService.getItem<string>(
      STORAGE_KEYS.ACCESS_TOKEN,
    );

    if (accessToken) {
      headers.set('Authorization', `Token ${accessToken}`);
    }
    headers.set('Content-Type', 'application/json');
    return headers;
  },
});

const baseQueryWithReauth: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);
  if (result.error && result.error.status === 401) {
    const url = '/auth/refreshtoken';

    const refreshResult = await baseQuery(
      {url, method: HTTP_METHODS.POST, credentials: 'include'},
      api,
      extraOptions,
    );
    const data = refreshResult.data as RefreshTokenResponse;

    if (data) {
      store.dispatch(SET_ACCESS_TOKEN(data.accessToken));
      result = await baseQuery(args, api, extraOptions);
    } else {
      store.dispatch(LOGOUT());
    }
  }
  return result;
};

const customBaseQuery = baseQueryWithReauth;

export default customBaseQuery;
