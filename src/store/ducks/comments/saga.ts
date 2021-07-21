import {put, call} from '@redux-saga/core/effects';
import {takeEvery, takeLeading} from 'redux-saga/effects';
import {
  getCommentSuccess,
  getCommentError,
  createCommentSuccess,
  createCommentError,
} from '../../ducks/comments/slice';
import {Api} from '../../../services/service';
import {CreateCommentDto} from '../../../types';

// requests
export const getCommentRequest = () => ({type: 'GET_COMMENT_REQUEST'});

export const createCommentRequest = (payload: {title: string}) => ({
  type: 'POST_COMMENT_REQUEST',
  payload,
});

// worker
export function* getCommentWorker(): Generator {
  try {
    const data = yield call(Api.getPrayer);
    yield put(getCommentSuccess(data));
  } catch {
    yield getCommentError();
  }
}
export function* createCommentWorker(action: {
  type: string;
  payload: CreateCommentDto;
}): Generator {
  try {
    const data = yield call(Api.createComment, action.payload);
    yield put(createCommentSuccess(data));
    yield console.log('comments', data);
  } catch {
    yield createCommentError();
  }
}

// watcher

export function* watchCommentSaga() {
  yield takeLeading('GET_COMMENT_REQUEST', getCommentWorker);
  yield takeEvery('POST_COMMENT_REQUEST', createCommentWorker);
}
