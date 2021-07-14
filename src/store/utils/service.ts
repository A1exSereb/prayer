import {BASE_URL, signin, signup, columns, prayers} from './urls';
import axios from 'axios';
import {
  GetColumnPromise,
  GetPrayerPromise,
  PostColumn,
  PostColumnPromise,
  PostPrayer,
  PostPrayerPromise,
  SignIn,
  SignInPromise,
  SignUp,
  SignUpPromise,
} from './types';

export const Api = {
  async signUp(payload: SignUp): Promise<SignUpPromise> {
    const {email, password, name} = payload;

    const request = await axios({
      method: 'post',
      url: `${BASE_URL}${signup}`,
      headers: {
        'Content-type': 'application/json',
      },
      data: {
        email,
        password,
        name,
      },
    });

    console.log('request', request);
    return request.data;
  },
  async signIn(payload: SignIn): Promise<SignInPromise> {
    const {email, password} = payload;

    const request = await axios({
      method: 'post',
      url: `${BASE_URL}${signin}`,
      headers: {
        'Content-type': 'application/json',
      },
      data: {
        email,
        password,
      },
    });

    return request.data;
  },
  async getColumn(token: string): Promise<Array<GetColumnPromise>> {
    console.log('api token', token);
    const request = await axios.get(`${BASE_URL}${columns}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return request.data;
  },
  async postColumn(
    token: string,
    payload: PostColumn,
  ): Promise<PostColumnPromise> {
    console.log('api token postColumn', token);
    console.log('api payload', payload);
    const request = await axios({
      method: 'post',
      url: `${BASE_URL}${columns}`,
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      data: {
        title: payload.title,
        description: payload.description,
      },
    });

    console.log('request data', request.data);
    return request.data;
  },
  async getPrayer(token: string): Promise<Array<GetPrayerPromise>> {
    console.log('api token', token);
    const request = await axios.get(`${BASE_URL}${prayers}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return request.data;
  },
  async postPrayer(
    token: string,
    payload: PostPrayer,
  ): Promise<PostPrayerPromise> {
    const {title, parentId} = payload;
    console.log('parent_id', parentId);
    console.log('title', title);
    const request = await axios({
      method: 'post',
      url: `${BASE_URL}${columns}/${parentId}${prayers}`,
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      data: {
        title,
        description: '',
        checked: false,
      },
    });

    console.log('post prayer request', request.data);
    return request.data;
  },
};
