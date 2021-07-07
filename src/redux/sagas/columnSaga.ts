import {takeLeading, put, call} from '@redux-saga/core/effects';
import axios from 'axios';
import {
  loadColumnError,
  loadColumnRequest,
  loadColumnSuccess,
} from '../ducks/columns/slice';
import {BASE_URL, columns} from '../utils/api';

export async function getColumn(): Promise<any> {
  const request = await axios.get(`${BASE_URL}${columns}`, {
    headers: {
      Authorization:
        'Bearer 382a0abf886f8e438488a354e5991d08ed17ef0fa0a5364d3caee7d17c965693',
    },
  });

  return request.data;
}

export function* loadColumn() {
  try {
    const data = yield call(getColumn);
    yield put(loadColumnSuccess(data));
    console.log(data);
  } catch {
    yield put(loadColumnError());
  }
}
export function* watchColumnSaga() {
  yield takeLeading(loadColumnRequest, loadColumn);
}
