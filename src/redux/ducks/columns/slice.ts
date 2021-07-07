import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {LoadColumn} from './types';

interface ColumnState {
  loading: boolean;
  columns: Array<{
    id: number;
    title: string;
    description: string | null;
    userId: number;
  }>;
  error: boolean;
}

const initialState = {
  loading: true,
  columns: [],
  error: false,
} as ColumnState;

const columnSlice = createSlice({
  name: 'column',
  initialState,
  reducers: {
    loadColumnRequest: state => {
      return state;
    },
    loadColumnSuccess: (state, action: PayloadAction<Array<LoadColumn>>) => {
      return {
        ...state,
        columns: action.payload,
        loading: false,
      };
    },
    loadColumnError: state => {
      return {
        ...state,
        loading: false,
        error: true,
      };
    },
  },
});

export default columnSlice.reducer;
export const {loadColumnSuccess, loadColumnRequest, loadColumnError} =
  columnSlice.actions;
