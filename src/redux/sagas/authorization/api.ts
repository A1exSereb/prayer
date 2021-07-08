import {BASE_URL, signin} from '../../utils/urls';
import axios from 'axios';

export const Api = {
  async signUp({email, password, name}) {
    const request = await axios({
      method: 'post',
      url: `${BASE_URL}${signin}`,
      headers: {
        'Content-type': 'application/json',
      },
      data: {
        email: email,
        password: password,
        name: name,
      },
    });

    return request.data;
  },
  async signIn({email, password}) {
    const request = await axios({
      method: 'post',
      url: `${BASE_URL}${signin}`,
      headers: {
        'Content-type': 'application/json',
      },
      data: {
        email: email,
        password: password,
      },
    });

    return request.data;
  },
};
