import {RootState} from 'src/store/rootReducer';

export const getColumn = (state: RootState) => {
  return state.column;
};
