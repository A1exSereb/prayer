import {put, call} from '@redux-saga/core/effects';
import {takeEvery, takeLatest, takeLeading} from 'redux-saga/effects';
import {
  getCommentSuccess,
  getCommentError,
  postCommentSuccess,
  postCommentError,
} from '../../ducks/comments/slice';
import {Api} from '../../../services/service';
import { postColumnWorker } from '../columns/saga';

// requests
export const getCommentRequest = () => ({type: 'GET_COMMENT_REQUEST'});

export const postCommentRequest = (payload: {title: string}) => ({
  type: 'POST_COMMENT_REQUEST',
  payload,
});

// worker
export function* getCommentWorker(): Generator {
  try {
    const data = yield call(Api.getComments);
    yield put(getCommentSuccess(data));
    yield console.log('comments', data);
  } catch {
    yield getCommentError();
  }
}

export function* postCommentWorker(action: {
  type: string;
  payload: {parentId: number; title: string};
}): Generator {
  try {
    const data = yield call(Api.postComment, action.payload);
    yield put(postCommentSuccess(data));
    yield console.log('comments', data);
  } catch {
    yield postCommentError();
  }
}

// watcher

export function* watchCommentSaga() {
  yield takeEvery('GET_COMMENT_REQUEST', getCommentWorker);
  yield takeEvery('POST_COMMENT_REQUEST', postCommentWorker);
}
