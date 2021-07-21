import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Column, CreateColumnResponse, StoreSlice} from '../../../types';

interface ColumnState {
  loading: boolean;
  columns: Array<Column>;
  error: boolean;
}

const initialState = {
  loading: true,
  columns: [],
  error: false,
} as ColumnState;

const columnSlice = createSlice({
  name: StoreSlice.Column,
  initialState,
  reducers: {
    getColumnSuccess: (state, action: PayloadAction<Array<Column>>): void => {
      state.columns = action.payload;
      state.loading = false;
    },
    getColumnError: state => {
      state.loading = false;
      state.error = true;
    },
    createColumnSuccess: (
      state,
      action: PayloadAction<CreateColumnResponse>,
    ) => {
      state.columns.push({
        id: action.payload.id,
        description: action.payload.description,
        userId: action.payload.user,
        title: action.payload.title,
      });
    },
    createColumnError: state => {
      state.error = true;
    },
  },
});

export default columnSlice.reducer;
export const {
  getColumnSuccess,
  getColumnError,
  createColumnSuccess,
  createColumnError,
} = columnSlice.actions;
