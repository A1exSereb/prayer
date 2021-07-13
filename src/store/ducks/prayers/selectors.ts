import {RootState} from 'src/store/rootReducer';

export const getPrayer = (state: RootState) => {
  return state.prayer;
};
