import AsyncStorage from '@react-native-async-storage/async-storage';
import {takeLeading, put, call, take} from '@redux-saga/core/effects';
import axios from 'axios';

import {
  signInRequest,
  signInSuccess,
  signInError,
  signUpRequest,
  signUpSuccess,
  signUpError,
} from '../ducks/authorization/slice';
import {BASE_URL, signin} from '../utils/api';

export async function signIn() {
  console.log('sending');
  const request = await axios({
    method: 'post',
    url: `${BASE_URL}${signin}`,
    headers: {
      'Content-type': 'application/json',
    },
    data: {
      email: 'string',
      password: 'string', // This is the body part
    },
  });

  console.log(request);
  return request.data;
}

export function* signInWorker() {
  console.log('call signin')
  const data = yield call(signIn);
  console.log(data);
  AsyncStorage.setItem('token', data.token);
  yield put(signInSuccess(data));
  console.log(data);
  console.log(AsyncStorage.getItem('token'));
}

export function* watchAuthorizationSaga() {
  yield takeLeading(signInRequest, signInWorker);
}
