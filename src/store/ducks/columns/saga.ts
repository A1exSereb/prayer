import {put, call, select} from '@redux-saga/core/effects';
import {takeLeading} from 'redux-saga/effects';
import {RootState} from 'src/store/rootReducer';
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

export const postColumnRequest = (payload: {
  title: string;
  description: string;
}) => ({
  type: 'POST_COLUMN_REQUEST',
  payload,
});

// worker

export function* getColumnWorker() {
  try {
    const token = yield select(
      (state: RootState) => state.authorization.user.token,
    );
    console.log('token', token);
    const data = yield call(Api.getColumn, token);
    yield put(getColumnSuccess(data));
    console.log(data);
  } catch {
    yield getColumnError();
  }
}

export function* postColumnWorker(action) {
  try {
    const token = yield select(
      (state: RootState) => state.authorization.user.token,
    );
    console.log('token', token);
    const data = yield call(Api.postColumn, token, action.payload);
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
