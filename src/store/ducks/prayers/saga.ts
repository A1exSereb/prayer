import {put, call, select} from '@redux-saga/core/effects';
import {takeEvery, takeLeading} from 'redux-saga/effects';
import {
  getPrayerError,
  getPrayerSuccess,
  getPrayerLoading,
  createPrayerError,
  createPrayerSuccess,
  changePrayerSuccess,
  changePrayerError,
  deletePrayerSuccess,
  deletePrayerError,
} from '../../ducks/prayers/slice';
import {Api} from '../../../services/service';
import {CreatePrayerDto, UpdatePrayerDto} from 'src/types';

// requests
export const getPrayerRequest = () => ({type: 'GET_PRAYER_REQUEST'});

export const postPrayerRequest = (payload: {
  title: string;
  parentId: number;
}) => ({
  type: 'POST_PRAYER_REQUEST',
  payload,
});

export const changePrayerRequest = (payload: ChangePrayerRequest) => ({
  type: 'CHANGE_PRAYER_REQUEST',
  payload,
});

export const deletePrayerRequest = (id: number) => ({
  type: 'DELETE_PRAYER_REQUEST',
  id,
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

export function* createPrayerWorker(action: {
  type: string;
  payload: CreatePrayerDto;
}): Generator {
  try {
    const data = yield call(Api.createPrayer, action.payload);
    yield put(createPrayerSuccess(data));
  } catch {
    yield put(createPrayerError());
  }
}

export function* changePrayerWorker(action: {
  type: string;
  payload: UpdatePrayerDto;
}): Generator {
  try {
    const data = yield call(Api.changePrayer, action.payload);
    yield console.log('change data', data);
    yield put(changePrayerSuccess(data));
  } catch {
    yield put(changePrayerError());
  }
}

export function* deletePrayerWorker(action: {
  type: string;
  id: number;
}): Generator {
  try {
    yield call(Api.deletePrayer, action.id);
    yield put(deletePrayerSuccess(action.id));
  } catch {
    yield put(deletePrayerError());
  }
}
// watcher

export function* watchPrayerSaga() {
  yield takeLeading('GET_PRAYER_REQUEST', getPrayerWorker);
  yield takeEvery('POST_PRAYER_REQUEST', createPrayerWorker);
  yield takeEvery('CHANGE_PRAYER_REQUEST', changePrayerWorker);
  yield takeEvery('DELETE_PRAYER_REQUEST', deletePrayerWorker);
}
