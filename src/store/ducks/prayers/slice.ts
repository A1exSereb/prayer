import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {CreatePrayerResponse, Prayer, StoreSlice} from '../../../types';
import {ChangePrayer, DeletePrayer, LoadPrayer, CreatePrayer} from './types';

interface PrayerState {
  loading: boolean;
  prayer: Array<Prayer>;
  error: boolean;
}

const initialState = {
  loading: true,
  prayer: [],
  error: false,
} as PrayerState;

const prayerSlice = createSlice({
  name: StoreSlice.Prayer,
  initialState,
  reducers: {
    getPrayerLoading: state => {
      state.loading = true;
    },
    getPrayerSuccess: (state, action: PayloadAction<Array<Prayer>>) => {
      state.prayer = action.payload;
      state.loading = false;
    },
    getPrayerError: state => {
      state.loading = false;
      state.error = true;
    },
    createPrayerSuccess: (
      state,
      action: PayloadAction<CreatePrayerResponse>,
    ) => {
      state.prayer.push({
        title: action.payload.title,
        description: action.payload.description,
        checked: action.payload.checked,
        id: action.payload.id,
        columnId: action.payload.columnId,
        commentsIds: [null],
      });
    },
    createPrayerError: state => {
      state.loading = false;
      state.error = true;
    },
    changePrayerSuccess: (state, action: PayloadAction<Prayer>) => {
      state.prayer = state.prayer.map(item => {
        return item.id === action.payload.id ? {...action.payload} : item;
      });
    },
    changePrayerError: state => {
      state.error = true;
    },
    deletePrayerSuccess: (state, action: PayloadAction<number>) => {
      state.prayer = state.prayer.filter(item => item.id !== action.payload);
    },
    deletePrayerError: state => {
      state.error = true;
    },
  },
});

export default prayerSlice.reducer;
export const {
  getPrayerSuccess,
  getPrayerError,
  getPrayerLoading,
  createPrayerSuccess,
  createPrayerError,
  changePrayerSuccess,
  changePrayerError,
  deletePrayerSuccess,
  deletePrayerError,
} = prayerSlice.actions;
