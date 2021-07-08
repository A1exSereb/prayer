import {takeLeading} from '@redux-saga/core/effects';
import {loadColumnRequest} from '../../ducks/columns/slice';
import {loadColumnWorker} from './worker';

export function* watchColumnSaga() {
  yield takeLeading(loadColumnRequest, loadColumnWorker);
}
