import {put, call, select} from '@redux-saga/core/effects';
import {RootState} from 'src/store/rootReducer';
import {
  getPrayerError,
  getPrayerSuccess,
  getPrayerLoading,
} from '../../ducks/prayers/slice';
import {Api} from '../../utils/service';

export function* getPrayerWorker() {
  try {
    const token = yield select(
      (state: RootState) => state.authorization.user.token,
    );
    yield getPrayerLoading();
    console.log('token', token);
    const data = yield call(Api.getPrayer, token);
    yield put(getPrayerSuccess(data));
    console.log('prayers', data);
  } catch {
    yield getPrayerError();
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
