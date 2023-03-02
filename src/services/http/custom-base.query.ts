import type {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
} from '@reduxjs/toolkit/query';
import {fetchBaseQuery} from '@reduxjs/toolkit/query';
// @ts-ignore
//import {BASE_URL} from '@env';
import {store} from '../../store';
import {SET_ACCESS_TOKEN} from '../../store/auth/auth.slice';
import {RefreshTokenResponse} from '../../../types/auth.types';
import {LOGOUT} from '../../store/auth/auth-async.actions';

export enum HTTP_METHODS {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  PATCH = 'PATCH',
  DELETE = 'DELETE',
}

const baseQuery = fetchBaseQuery({
  baseUrl: 'http://192.168.31.82/api',
  prepareHeaders: async headers => {
    const {
      auth: {
        auth: {accessToken},
      },
    } = store.getState();

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
