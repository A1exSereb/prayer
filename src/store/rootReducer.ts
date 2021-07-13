import {combineReducers} from '@reduxjs/toolkit';
import authorizationSlice from './ducks/authorization';
import columnSlice from './ducks/columns';
import prayerSlice from './ducks/prayers';

const rootReducer = combineReducers({
  authorization: authorizationSlice,
  column: columnSlice,
  prayer: prayerSlice,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
