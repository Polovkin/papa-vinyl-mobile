import {createAsyncThunk} from '@reduxjs/toolkit';

import {RootState} from '../index';
import {LoginPayload, LoginResponse} from '../../../types/auth.types';
import HTTP_STATUS, {BackendError} from '../../../types';
import HttpService from '../../services/http/http.service';
import {LOGIN_USER, LOGOUT_STATE} from './auth.slice';

enum AUTH_ACTIONS {
  LOGIN = 'auth/LOGIN',
  LOGOUT = 'auth/LOGOUT',
  REFRESH_TOKEN = 'auth/REFRESH_TOKEN',
}

const LOGIN = createAsyncThunk<LoginResponse, LoginPayload, {state: RootState}>(
  AUTH_ACTIONS.LOGIN,
  async (credentials, {rejectWithValue, dispatch}) => {
    try {
      const response = await HttpService.post<LoginResponse>(
        '/auth/login',
        credentials,
      );
      dispatch(LOGIN_USER(response));
      return response;
    } catch (err: unknown) {
      const error = err as BackendError;
      console.log(error);
      /*    setTimeout(() => {
        dispatch(CLOSE_ALERT())
      }, 3000) */
      if (error.status === HTTP_STATUS.UNAUTHORIZED) {
        // alert('401')
      }
      return rejectWithValue(error.message);
    }
  },
);
const LOGOUT = createAsyncThunk<void, undefined, {state: RootState}>(
  AUTH_ACTIONS.LOGOUT,
  async (_, {dispatch}) => {
    try {
      await HttpService.delete('/auth/logout');
    } catch (err: any) {
      console.log(err);
    }

    dispatch(LOGOUT_STATE());
  },
);
const REFRESH_TOKEN_ACTION = createAsyncThunk(
  AUTH_ACTIONS.REFRESH_TOKEN,
  async () => {
    return HttpService.post<LoginResponse>('/auth/refreshtoken');
  },
);

export {LOGIN, AUTH_ACTIONS, REFRESH_TOKEN_ACTION, LOGOUT};
