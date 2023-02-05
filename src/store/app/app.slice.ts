import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';
import {REDUCERS_NAMES} from '../../../types/store.types';

export interface AppState {
  modalState: boolean;
}

const initialState: AppState = {
  modalState: false,
};

export const appSlice = createSlice({
  name: REDUCERS_NAMES.APP,
  initialState,
  reducers: {
    SET_MODAL_STATE: (state, action: PayloadAction<boolean>) => {
      state.modalState = action.payload;
    },
  },
});

export const {SET_MODAL_STATE} = appSlice.actions;

export default appSlice.reducer;
