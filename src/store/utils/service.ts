import {BASE_URL, signin, signup, columns, prayers} from './urls';
import axios from 'axios';
interface SignUp {
  name: string;
  password: string;
  email: string;
}
interface SignIn {
  password: string;
  email: string;
}
interface PostColumn {
  title: string;
  description: string;
}
interface PostPrayer {
  title: string;
  description: string;
  checked: boolean;
}
export const Api = {
  async signUp(payload: SignUp) {
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
  async signIn(payload: SignIn) {
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
  async getColumn(token: string): Promise<any> {
    console.log('api token', token);
    const request = await axios.get(`${BASE_URL}${columns}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return request.data;
  },
  async postColumn(token: string, payload: PostColumn): Promise<any> {
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
  async getPrayer(token: string): Promise<any> {
    console.log('api token', token);
    const request = await axios.get(`${BASE_URL}${prayers}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return request.data;
  },
  async postPrayer(token: string, payload: PostPrayer): Promise<any> {
    console.log('api token postPrayer', token);
    console.log('api payload', payload);
    const request = await axios({
      method: 'post',
      url: `${BASE_URL}${prayers}`,
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      data: {
        title: payload,
        description: '',
        checked: false,
      },
    });

    console.log('request data', request.data);
    return request.data;
  },
};
