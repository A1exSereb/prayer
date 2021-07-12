import {all} from 'redux-saga/effects';
import {watchAuthorizationSaga} from './authorization';
import {watchColumnSaga} from './column';
import {watchPrayerSaga} from './prayers';

export default function* rootSaga() {
  yield all([watchAuthorizationSaga(), watchColumnSaga(), watchPrayerSaga()]);
}
