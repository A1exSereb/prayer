import {RootState} from 'src/store/rootReducer';

export const getToken = (state: RootState): string => {
  return state.authorization.user.token;
};
