import {takeEvery} from 'redux-saga/effects';
import {signInWorker, signUpWorker} from './worker';
export function* watchAuthorizationSaga() {
  yield takeEvery('SIGN_IN_REQUEST', signInWorker);
  yield takeEvery('SIGN_UP_REQUEST', signUpWorker);
}
