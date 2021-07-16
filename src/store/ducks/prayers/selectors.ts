import {RootState} from 'src/store/rootReducer';

export const getPrayer = (state: RootState) => {
  return state.prayer;
};

export const getCheckedPrayerById = (id: number) => (state: RootState) => {
  return state.prayer.prayer
    .filter(item => item.checked === true)
    .filter(item => item.columnId === id);
};

export const getUncheckedPrayerById = (id: number) => (state: RootState) => {
  return state.prayer.prayer
    .filter(item => item.checked === false)
    .filter(item => item.columnId === id);
};