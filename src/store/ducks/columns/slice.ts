import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Column, StoreSlice} from '../../../types';
import {LoadColumn, PostColumn} from './types';

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
    getColumnSuccess: (state, action: PayloadAction<Array<LoadColumn>>) => {
      return {
        ...state,
        columns: action.payload,
        loading: false,
      };
    },
    getColumnError: state => {
      return {
        ...state,
        loading: false,
        error: true,
      };
    },
    createColumnSuccess: (
      state,
      action: PayloadAction<PostColumn>,
    ): ColumnState => {
      return {
        ...state,
        columns: state.columns.concat({
          id: action.payload.id,
          description: action.payload.description,
          userId: action.payload.user,
          title: action.payload.title,
        }),
      };
    },
    createColumnError: state => {
      return {
        ...state,
        error: true,
      };
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
