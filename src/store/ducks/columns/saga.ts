import {put, call, select} from '@redux-saga/core/effects';
import {takeLeading} from 'redux-saga/effects';
import {RootState} from 'src/store/rootReducer';
import {CreateColumn, CreateColumnPromise} from 'src/store/utils/types';
import {
  getColumnError,
  getColumnSuccess,
  createColumnError,
  createColumnSuccess,
} from '../../ducks/columns/slice';
import {Api} from '../../../services/service';

// requests

export const getColumnRequest = () => ({
  type: 'GET_COLUMN_REQUEST',
});

export const postColumnRequest = (payload: CreateColumn) => ({
  type: 'POST_COLUMN_REQUEST',
  payload,
});

// worker

export function* getColumnWorker(): Generator {
  try {
    const data = yield call(Api.getColumn);
    yield put(getColumnSuccess(data));
    console.log(data);
  } catch {
    yield getColumnError();
  }
}


export function* createColumnWorker(action: {
  type: string;
  payload: CreateColumn;
}): Generator {
  try {
    const data = yield call(Api.createColumn, action.payload);
    yield put(createColumnSuccess(data));
    console.log(data);
  } catch {
    yield put(createColumnError());
  }
}

// watcher
export function* watchColumnSaga() {
  yield takeLeading('GET_COLUMN_REQUEST', getColumnWorker);
  yield takeLeading('POST_COLUMN_REQUEST', createColumnWorker);
}
