import {createAsyncThunk} from '@reduxjs/toolkit';

import {RootState} from '../index';
import {
  LoginPayload,
  LoginResponse,
  RefreshTokenResponse, RegisterPayload
} from "../../../types/auth.types";
import HTTP_STATUS, {BackendError} from '../../../types';
import HttpService from '../../services/http/http.service';
import {LOGIN_USER, LOGOUT_STATE} from './auth.slice';

enum AUTH_ACTIONS {
  LOGIN = 'auth/LOGIN',
  LOGOUT = 'auth/LOGOUT',
  REGISTER = 'auth/REGISTER',
  REFRESH_TOKEN = 'auth/REFRESH_TOKEN',
}

const LOGIN = createAsyncThunk<LoginResponse, LoginPayload, {state: RootState}>(
  AUTH_ACTIONS.LOGIN,
  async (credentials, {rejectWithValue, dispatch}) => {
    try {
      const response = await HttpService.post<LoginResponse>(
        '/auth/mobile/login',
        credentials,
      );
      dispatch(LOGIN_USER(response));
      return response;
    } catch (err: unknown) {
      const error = err as BackendError;
      console.log(error);

      return rejectWithValue(error.message);
    }
  },
);

const REGISTER = createAsyncThunk<string, RegisterPayload, {state: RootState}>(
  AUTH_ACTIONS.REGISTER,
  async (credentials, {rejectWithValue}) => {
    try {
      return await HttpService.post<string>('/auth/signup', credentials);
    } catch (err: unknown) {
      const error = err as BackendError;
      console.log(error);

      return rejectWithValue(error.message);
    }
  },
);

const LOGOUT = createAsyncThunk<void, undefined, {state: RootState}>(
  AUTH_ACTIONS.LOGOUT,
  async (_, {dispatch}) => {
    try {
      await HttpService.delete('/auth/mobile/logout');
    } catch (e: unknown) {}

    dispatch(LOGOUT_STATE());
  },
);

const REFRESH_TOKEN_ACTION = createAsyncThunk<
  RefreshTokenResponse,
  string,
  {state: RootState}
>(
  AUTH_ACTIONS.REFRESH_TOKEN,
  async (refreshToken, {rejectWithValue, dispatch}) => {
    try {
      return HttpService.post<LoginResponse>('/auth/mobile/refreshtoken', {
        refreshToken,
      });
    } catch (e: unknown) {
      const error = e as BackendError;
      if (error.status === HTTP_STATUS.UNAUTHORIZED) {
        dispatch(LOGOUT);
      }

      return rejectWithValue(e);
    }
  },
);

export {LOGIN, AUTH_ACTIONS, REFRESH_TOKEN_ACTION, LOGOUT, REGISTER};
