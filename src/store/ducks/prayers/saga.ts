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
import {getToken} from '../authorization/selectors';
import {PostPrayer} from './types';

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
export function* getPrayerWorker(): Generator {
  try {
    yield getPrayerLoading();
    const data = yield call(Api.getPrayer);
    yield put(getPrayerSuccess(data));
  } catch {
    yield getPrayerError();
  }
}

export function* postPrayerWorker(action: {
  type: string;
  payload: PostPrayer;
}): Generator {
  try {
    const data = yield call(Api.postPrayer, action.payload);
    yield put(postPrayerSuccess(data));
  } catch {
    yield put(postPrayerError());
  }
}

// watcher

export function* watchPrayerSaga() {
  yield takeLeading('GET_PRAYER_REQUEST', getPrayerWorker);
  yield takeEvery('POST_PRAYER_REQUEST', postPrayerWorker);
}
