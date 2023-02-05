import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {IUser} from '../../../types/user.types';
import {LOGIN} from '../actions/auth-async.actions';
//import AsyncStorageService from '../../services/storage/async-storage.service';

interface IAuthState {
  user: IUser | null;
  auth: {
    accessToken: string | null;
    isAuthenticated: boolean;
  };
}

const initialState: IAuthState = {
  auth: {
    accessToken: null,
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
    INIT_USER_AUTH: () => {
      /*  const userData = LocalstorageService.getItem<UserStorage>(
        StoragesKeys.USER,
      );*/
      // state.user = userData?.user ?? null;
      // state.auth.isAuthenticated = userData?.isAuthenticated ?? false;
    },
    LOGOUT: state => {
      state.user = null;
      state.auth.accessToken = null;
      state.auth.isAuthenticated = false;

      // CookieService.deleteCookie(StoragesKeys.USER);
      // LocalstorageService.removeItem(StoragesKeys.USER);
    },
  },
  extraReducers: builder => {
    builder.addCase(LOGIN.fulfilled, (state, action) => {
      const {accessToken, email, phone, roles, username} = action.payload;
      const user: IUser = {
        email,
        phone,
        username,
        roles,
      };
      const isAuthenticated = true;

      state.user = user;
      state.auth.accessToken = accessToken;
      state.auth.isAuthenticated = isAuthenticated;

      /* const UserLocalStorage = {
        user,
        isAuthenticated,
      };*/

      /* AsyncStorageService.setItem<UserStorage>(
        StoragesKeys.USER,
        UserLocalStorage,
      );*/
    });

    builder.addCase(LOGIN.rejected, state => {
      state.user = null;
      state.auth.accessToken = null;
      state.auth.isAuthenticated = false;
    });
  },
});
export const {SET_ACCESS_TOKEN, INIT_USER_AUTH, LOGOUT} = authSlice.actions;
export default authSlice.reducer;
