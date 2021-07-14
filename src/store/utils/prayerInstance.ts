import axios from 'axios';
import {RootState} from '../rootReducer';
import {store} from '../store';
import {BASE_URL} from './urls';

const httpClient = axios.create({
  baseURL: BASE_URL,
  headers: {'Content-type': 'application/json'},
});
httpClient.interceptors.request.use(config => {
  const state: RootState = store.getState();
  if (!state.authorization.user?.token) {
    return config;
  }
  const headers = {
    ...config.headers,
    Authorization: `Bearer ${state.authorization.user?.token}`,
  };
  return {...config, headers};
});
httpClient.interceptors.response.use(response => {
  return response;
});

export default httpClient;
