import {put, call} from '@redux-saga/core/effects';
import {loadColumnError, loadColumnSuccess} from '../../ducks/columns/slice';
import {Api} from './api';

export function* loadColumnWorker() {
  try {
    const data = yield call(Api.getColumn);
    yield put(loadColumnSuccess(data));
    console.log(data);
  } catch {
    yield put(loadColumnError());
  }
};
