import {all} from 'redux-saga/effects';
import {watchAuthorizationSaga} from './ducks/authorization/saga';
import {watchColumnSaga} from './ducks/columns/saga';
import {watchCommentSaga} from './ducks/comments/saga';
import {watchPrayerSaga} from './ducks/prayers/saga';

export default function* rootSaga() {
  yield all([
    watchAuthorizationSaga(),
    watchColumnSaga(),
    watchPrayerSaga(),
    watchCommentSaga(),
  ]);
}
