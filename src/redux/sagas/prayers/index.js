import {takeLeading} from '@redux-saga/core/effects';
import {loadPrayerWorker /* postPrayerWorker */} from './worker';

export function* watchPrayerSaga() {
  yield takeLeading('LOAD_PRAYER_REQUEST', loadPrayerWorker);
  /*   yield takeLeading('POST_PRAYER_REQUEST', postPrayerWorker);
   */
}
