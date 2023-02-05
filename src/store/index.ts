import {configureStore} from '@reduxjs/toolkit';
import {setupListeners} from '@reduxjs/toolkit/query';

import appReducer from './reducers/app.slice';
import {authSlice} from './reducers/auth.slice';
import {categoriesSlice} from './reducers/categories.slice';

export const store = configureStore({
  reducer: {
    app: appReducer,
    auth: authSlice.reducer,
    [categoriesSlice.reducerPath]: categoriesSlice.reducer,
  },

  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(categoriesSlice.middleware),
});
setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
