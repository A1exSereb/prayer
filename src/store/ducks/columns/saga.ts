import {put, call, select} from '@redux-saga/core/effects';
import {takeLeading} from 'redux-saga/effects';
import {RootState} from 'src/store/rootReducer';
import {PostColumn, PostColumnPromise} from 'src/store/utils/types';
import {
  getColumnError,
  getColumnSuccess,
  postColumnError,
  postColumnSuccess,
} from '../../ducks/columns/slice';
import {Api} from '../../utils/service';

// requests

export const getColumnRequest = () => ({
  type: 'GET_COLUMN_REQUEST',
});

export const postColumnRequest = (payload: PostColumn) => ({
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


export function* postColumnWorker(action: {
  type: string;
  payload: PostColumn;
}): Generator {
  try {
    const data = yield call(Api.postColumn, action.payload);
    yield put(postColumnSuccess(data));
    console.log(data);
  } catch {
    yield put(postColumnError());
  }
}

// watcher
export function* watchColumnSaga() {
  yield takeLeading('GET_COLUMN_REQUEST', getColumnWorker);
  yield takeLeading('POST_COLUMN_REQUEST', postColumnWorker);
}
