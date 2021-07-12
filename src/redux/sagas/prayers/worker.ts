import {put, call, select} from '@redux-saga/core/effects';
import {RootState} from 'src/redux/rootReducer';
import {
  loadPrayerError,
  loadPrayerSuccess,
  loadPrayerLoading,
} from '../../ducks/prayers/slice';
import {Api} from './api';

export function* loadPrayerWorker() {
  try {
    const token = yield select(
      (state: RootState) => state.authorization.user.token,
    );
    yield loadPrayerLoading();
    console.log('token', token);
    const data = yield call(Api.getPrayer, token);
    yield put(loadPrayerSuccess(data));
    console.log('prayers', data);
  } catch {
    yield loadPrayerError();
  }
}

/* export function* postPrayerWorker(action) {
  try {
    const token = yield select(
      (state: RootState) => state.authorization.user.token,
    );
    console.log('token', token);
    const data = yield call(Api.postPrayer, token, action.payload);
    yield put(postColumnSuccess(data));
    console.log(data);
  } catch {
    yield put(postColumnError());
  }
}
 */
