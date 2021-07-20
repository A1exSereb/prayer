import {combineReducers} from '@reduxjs/toolkit';
import authorizationSlice from './ducks/authorization';
import columnSlice from './ducks/columns';
import prayerSlice from './ducks/prayers';
import commentSlice from './ducks/comments';

const rootReducer = combineReducers({
  authorization: authorizationSlice,
  column: columnSlice,
  prayer: prayerSlice,
  comment: commentSlice,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
