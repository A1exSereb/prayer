import {put, call} from '@redux-saga/core/effects';
import {takeEvery, takeLatest, takeLeading} from 'redux-saga/effects';
import {getCommentSuccess, getCommentError} from '../../ducks/comments/slice';
import {Api} from '../../utils/service';

// requests
export const getCommentRequest = () => ({type: 'GET_COMMENT_REQUEST'});

export const postCommentRequest = (payload: {
  title: string;
}) => ({
  type: 'POST_COMMENT_REQUEST',
  payload,
});

// worker
export function* getCommentWorker(): Generator {
  try {
    console.log('call getComment');
    const data = yield call(Api.getComments);
    yield put(getCommentSuccess(data));
    yield console.log('comments', data);
  } catch {
    yield getCommentError();
  }
}

// watcher

export function* watchCommentSaga() {
  yield takeEvery('GET_COMMENT_REQUEST', getCommentWorker);
}
