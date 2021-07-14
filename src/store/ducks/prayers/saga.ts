import {put, call, select} from '@redux-saga/core/effects';
import {takeEvery, takeLeading} from 'redux-saga/effects';
import {RootState} from 'src/store/rootReducer';
import {
  getPrayerError,
  getPrayerSuccess,
  getPrayerLoading,
  postPrayerError,
  postPrayerSuccess,
} from '../../ducks/prayers/slice';
import {Api} from '../../utils/service';

// requests
export const getPrayerRequest = () => ({type: 'GET_PRAYER_REQUEST'});

export const postPrayerRequest = (payload: {
  title: string;
  parentId: number;
}) => ({
  type: 'POST_PRAYER_REQUEST',
  payload,
});

// worker
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

export function* postPrayerWorker(action) {
  try {
    const token = yield select(
      (state: RootState) => state.authorization.user.token,
    );
    console.log('post prayer worker');
    const data = yield call(Api.postPrayer, token, action.payload);
    yield put(postPrayerSuccess(data));
    console.log(data);
  } catch {
    yield put(postPrayerError());
  }
}

// watcher

export function* watchPrayerSaga() {
  yield takeLeading('GET_PRAYER_REQUEST', getPrayerWorker);
  yield takeEvery('POST_PRAYER_REQUEST', postPrayerWorker);
}
