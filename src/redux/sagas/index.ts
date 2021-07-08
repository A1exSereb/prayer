import {all} from 'redux-saga/effects';
import {watchAuthorizationSaga} from './authorization';
import {watchColumnSaga} from './column';

export default function* rootSaga() {
  yield all([watchAuthorizationSaga(), watchColumnSaga()]);
}
