import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {LOGIN, LOGOUT, REFRESH_TOKEN_ACTION} from './auth-async.actions';
import {IUser} from '../../../types/vendors/user.types';
import {LoginResponse} from '../../../types/auth.types';

interface IAuthState {
  user: IUser | null;
  auth: {
    accessToken: string | null;
    refreshToken: string | null;
    isAuthenticated: boolean;
  };
}

const initialState: IAuthState = {
  auth: {
    accessToken: null,
    refreshToken: null,
    isAuthenticated: false,
  },
  user: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    SET_ACCESS_TOKEN: (state, action: PayloadAction<string | null>) => {
      state.auth.accessToken = action.payload;
      state.auth.isAuthenticated = !!action.payload;
    },
    SET_USER: (state, action: PayloadAction<IUser | null>) => {
      state.user = action.payload;
    },
    LOGIN_USER: (state, action: PayloadAction<LoginResponse>) => {
      const {accessToken, refreshToken, email, roles, username} =
        action.payload;
      const user: IUser = {
        email,
        phone: '',
        username,
        roles,
      };
      const isAuthenticated = true;

      state.user = user;
      state.auth.accessToken = accessToken;
      state.auth.refreshToken = refreshToken;
      state.auth.isAuthenticated = isAuthenticated;
    },
    LOGOUT_STATE: state => {
      state.user = initialState.user;
      state.auth = initialState.auth;
    },
  },
  extraReducers: builder => {
    builder.addCase(LOGOUT.fulfilled, () => {});

    builder.addCase(LOGIN.rejected, state => {
      state.user = null;
      state.auth.accessToken = null;
      state.auth.isAuthenticated = false;
    });
    builder.addCase(REFRESH_TOKEN_ACTION.fulfilled, (state, action) => {
      if (action.payload) {
        state.auth.accessToken = action.payload.accessToken;
      }
    });
    builder.addCase(REFRESH_TOKEN_ACTION.rejected, state => {
      state.user = initialState.user;
      state.auth = initialState.auth;
    });
  },
});
export const {SET_ACCESS_TOKEN, LOGIN_USER, LOGOUT_STATE} = authSlice.actions;
export default authSlice.reducer;
