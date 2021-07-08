import {BASE_URL, signin, signup} from '../../utils/urls';
import axios from 'axios';

export const Api = {
  async signUp(payload) { 
    console.log('name', payload.name);
    console.log('email', payload.email);
    console.log('password', payload.password);
    const request = await axios({
      method: 'post',
      url: `${BASE_URL}${signup}`,
      headers: {
        'Content-type': 'application/json',
      },
      data: {
        email: payload.email,
        password: payload.password,
        name: payload.name,
      },
    });

    console.log('request', request);
    return request.data;
  },
  async signIn(payload) {
    console.log('email', payload.email);
    console.log('password', payload.password);
    const request = await axios({
      method: 'post',
      url: `${BASE_URL}${signin}`,
      headers: {
        'Content-type': 'application/json',
      },
      data: {
        email: payload.email,
        password: payload.password,
      },
    });

    return request.data;
  },
};
