import {takeLeading} from '@redux-saga/core/effects';
import {loadColumnWorker, postColumnWorker} from './worker';

export function* watchColumnSaga() {
  yield takeLeading('LOAD_COLUMN_REQUEST', loadColumnWorker);
  yield takeLeading('POST_COLUMN_REQUEST', postColumnWorker);
}
