import AsyncStorage from '@react-native-async-storage/async-storage';
import {put, call} from '@redux-saga/core/effects';
import {
  signInLoading,
  signInSuccess,
  signInError,
  signUpLoading,
  signUpSuccess,
  signUpError,
} from '../../ducks/authorization/slice';
import {Api} from './api';

export function* signInWorker(action) {
  console.log('call signin');
  yield call(signInLoading);
  try {
    const data = yield call(Api.signIn, action.payload);
    AsyncStorage.setItem('token', data.token);
    yield put(signInSuccess(data));
  } catch {
    yield put(signInError());
  }
}
export function* signUpWorker(action) {
  console.log('call signup');
  yield call(signUpLoading);
  try {
    const data = yield call(Api.signUp, action.payload);
    AsyncStorage.setItem('token', data.token);
    yield put(signUpSuccess(data));
  } catch {
    yield put(signUpError());
  }
}
