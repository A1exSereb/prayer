import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {LoadPrayer} from './types';

interface PrayerState {
  loading: boolean;
  prayer: Array<{
    id: number;
    title: string;
    description: string | null;
    columnId: number;
    checked: boolean;
    commentsIds: Array<number>;
  }>;
  error: boolean;
}

const initialState = {
  loading: true,
  prayer: [],
  error: false,
} as PrayerState;

const prayerSlice = createSlice({
  name: 'prayer',
  initialState,
  reducers: {
    loadPrayerLoading: state => {
      return {...state, loading: true};
    },
    loadPrayerSuccess: (state, action: PayloadAction<Array<LoadPrayer>>) => {
      return {
        ...state,
        prayer: action.payload,
        loading: false,
      };
    },
    loadPrayerError: state => {
      return {
        ...state,
        loading: false,
        error: true,
      };
    },
  },
});

export default prayerSlice.reducer;
export const {loadPrayerSuccess, loadPrayerError, loadPrayerLoading} =
  prayerSlice.actions;
