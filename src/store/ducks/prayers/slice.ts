import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {LoadPrayer, PostPrayer} from './types';

interface PrayerState {
  loading: boolean;
  prayer: Array<{
    id: number;
    title: string;
    description: string | null;
    columnId: number;
    checked: boolean;
    commentsIds: Array<number | null>;
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
    getPrayerLoading: state => {
      return {...state, loading: true};
    },
    getPrayerSuccess: (state, action: PayloadAction<Array<LoadPrayer>>) => {
      return {
        ...state,
        prayer: action.payload,
        loading: false,
      };
    },
    getPrayerError: state => {
      return {
        ...state,
        loading: false,
        error: true,
      };
    },
    postPrayerSuccess: (state, action: PayloadAction<PostPrayer>) => {
      return {
        ...state,
        prayer: state.prayer.concat({
          title: action.payload.title,
          description: action.payload.description,
          checked: action.payload.checked,
          id: action.payload.id,
          columnId: action.payload.columnId,
          commentsIds: [null],
        }),
      };
    },
    postPrayerError: state => {
      return {
        ...state,
        loading: false,
        error: true,
      };
    },
  },
});

export default prayerSlice.reducer;
export const {
  getPrayerSuccess,
  getPrayerError,
  getPrayerLoading,
  postPrayerSuccess,
  postPrayerError,
} = prayerSlice.actions;
