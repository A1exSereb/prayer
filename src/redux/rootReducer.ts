import {combineReducers} from '@reduxjs/toolkit';
import authorizationSlice from './ducks/authorization';
import columnSlice from './ducks/columns';

const rootReducer = combineReducers({
  authorization: authorizationSlice,
  column: columnSlice,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
