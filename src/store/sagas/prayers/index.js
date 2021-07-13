import {takeLeading} from '@redux-saga/core/effects';
import {getPrayerWorker /* postPrayerWorker */} from './worker';

export function* watchPrayerSaga() {
  yield takeLeading('GET_PRAYER_REQUEST', getPrayerWorker);
  /*   yield takeLeading('POST_PRAYER_REQUEST', postPrayerWorker);
   */
}
