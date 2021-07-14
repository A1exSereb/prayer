import AsyncStorage from '@react-native-async-storage/async-storage';
import {put, call, takeEvery} from '@redux-saga/core/effects';
import {SignUpPromise} from 'src/store/utils/types';
import {
  signInLoading,
  signInSuccess,
  signInError,
  signUpLoading,
  signUpSuccess,
  signUpError,
} from '../../ducks/authorization/slice';
import {Api} from '../../utils/service';
import {SignIn, SignUp, SignUpRequest} from './types';

// requests
export const signInRequest = (payload: {email: string; password: string}) => ({
  type: 'SIGN_IN_REQUEST',
  payload,
});

export const signUpRequest = (payload: SignUpRequest) => ({
  type: 'SIGN_UP_REQUEST',
  payload,
});

// worker

export function* signInWorker(action: {type: string; payload: SignIn}) {
  console.log('call signin');
  try {
    yield put(signInLoading());
    const data = yield call(Api.signIn, action.payload);
    yield put(signInSuccess(data));
  } catch {
    yield put(signInError());
  }
}
export function* signUpWorker(action: {
  type: string;
  payload: SignUp;
}): Generator {
  console.log('call signup');
  try {
    yield put(signUpLoading());
    const data = yield call(Api.signUp, action.payload);
    yield put(signUpSuccess(data));
  } catch {
    yield put(signUpError());
  }
}
// watcher
export function* watchAuthorizationSaga() {
  yield takeEvery('SIGN_IN_REQUEST', signInWorker);
  yield takeEvery('SIGN_UP_REQUEST', signUpWorker);
}
