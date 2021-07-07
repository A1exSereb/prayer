import {all} from 'redux-saga/effects';
import {watchAuthorizationSaga} from './authorizationSaga';
import {watchColumnSaga} from './columnSaga';

export default function* rootSaga() {
  yield all([watchAuthorizationSaga(), watchColumnSaga()]);
}
