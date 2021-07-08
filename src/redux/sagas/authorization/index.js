import {takeLeading} from '@redux-saga/core/effects';
import {signInRequest, signUpRequest} from '../../ducks/authorization/slice';
import {signInWorker, signUpWorker} from './worker';
export function* watchAuthorizationSaga() {
  yield takeLeading(signInRequest, signInWorker);
  yield takeLeading(signUpRequest, signUpWorker);
}
