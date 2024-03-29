import {combineReducers} from '@reduxjs/toolkit';
import appReducer from './app/app.slice';
import {authSlice} from './auth/auth.slice';
import {categoriesSlice} from './api/categories.slice';

export default combineReducers({
  app: appReducer,
  auth: authSlice.reducer,
  [categoriesSlice.reducerPath]: categoriesSlice.reducer,
});
