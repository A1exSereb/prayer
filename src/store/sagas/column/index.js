import {takeLeading} from '@redux-saga/core/effects';
import {getColumnWorker, postColumnWorker} from './worker';

export function* watchColumnSaga() {
  yield takeLeading('GET_COLUMN_REQUEST', getColumnWorker);
  yield takeLeading('POST_COLUMN_REQUEST', postColumnWorker);
}
