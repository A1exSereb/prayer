import AsyncStorage from '@react-native-async-storage/async-storage';
import {put, call} from '@redux-saga/core/effects';
import {
  signInSuccess,
  signInError,
  signUpSuccess,
  signUpError,
} from '../../ducks/authorization/slice';
import {Api} from './api';

export function* signInWorker({email, password}: SignInRequest) {
  console.log('call signin');
  const data = yield call(Api.signIn, {email, password});
  try {
    AsyncStorage.setItem('token', data.token);
    yield put(signInSuccess(data));
  } catch {
    yield put(signInError());
  }
}
export function* signUpWorker({email, password, name}: SignUpRequest) {
  console.log('call signup');
  const data = yield call(Api.signUp, {email, password, name});
  try {
    AsyncStorage.setItem('token', data.token);
    yield put(signUpSuccess(data));
  } catch {
    yield put(signUpError());
  }
}
