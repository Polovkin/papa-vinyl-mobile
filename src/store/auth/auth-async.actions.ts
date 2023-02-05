import {createAsyncThunk} from '@reduxjs/toolkit';

import {RootState} from '../index';
import {LoginPayload, LoginResponse} from '../../../types/auth.types';
import HTTP_STATUS from '../../../types';
import HttpService from '../../services/http/http.service';

enum AUTH_ACTIONS {
  LOGIN = 'auth/LOGIN',
  REFRESH_TOKEN = 'auth/REFRESH_TOKEN',
}

const LOGIN = createAsyncThunk<LoginResponse, LoginPayload, {state: RootState}>(
  AUTH_ACTIONS.LOGIN,
  async (credentials, {rejectWithValue}) => {
    try {
      return await HttpService.post<LoginResponse>('/auth/login', credentials);
    } catch (err: unknown) {
      const error = err as Response;

      if (error.status === HTTP_STATUS.UNAUTHORIZED) {
        console.log('401');
      }
      return rejectWithValue(error);
    }
  },
);

const REFRESH_TOKEN_ACTION = createAsyncThunk(
  AUTH_ACTIONS.REFRESH_TOKEN,
  async () => {
    return HttpService.post<LoginResponse>('/auth/refreshtoken');
  },
);

export {LOGIN, AUTH_ACTIONS, REFRESH_TOKEN_ACTION};
