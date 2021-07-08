import {put, call, select} from '@redux-saga/core/effects';
import {RootState} from 'src/redux/rootReducer';
import {loadColumnError, loadColumnSuccess} from '../../ducks/columns/slice';
import {Api} from './api';

export function* loadColumnWorker() {
  try {
    const token = yield select(
      (state: RootState) => state.authorization.user.token,
    );
    console.log('token', token);
    const data = yield call(Api.getColumn, token);
    yield put(loadColumnSuccess(data));
    console.log(data);
  } catch {
    yield put(loadColumnError());
  }
}
