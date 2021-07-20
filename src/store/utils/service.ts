import {signin, signup, columns, prayers, comments} from './urls';
import {
  GetColumnPromise,
  GetComment,
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
import httpClient from './prayerInstance';
import {AxiosResponse} from 'axios';
import {ChangePrayerRequest, LoadPrayer} from '../ducks/prayers/types';

export const Api = {
  async signUp(payload: SignUp): Promise<SignUpPromise> {
    const {email, password, name} = payload;

    const request = await httpClient({
      method: 'post',
      url: `${signup}`,
      data: {
        email,
        password,
        name,
      },
    });

    console.log('request', request);
    return request.data;
  },
  async signIn(payload: SignIn): Promise<AxiosResponse<SignInPromise>> {
    const {email, password} = payload;

    const request = await httpClient({
      method: 'post',
      url: `${signin}`,
      data: {
        email,
        password,
      },
    });

    return request.data;
  },
  async getColumn(): Promise<Array<GetColumnPromise>> {
    const request: AxiosResponse<Array<GetColumnPromise>> = await httpClient({
      url: `${columns}`,
    });

    return request.data;
  },
  async postColumn(payload: PostColumn): Promise<PostColumnPromise> {
    const {title, description} = payload;
    const request = await httpClient({
      method: 'post',
      url: `${columns}`,
      data: {
        title,
        description,
      },
    });

    console.log('request data', request.data);
    return request.data;
  },
  async getPrayer(): Promise<Array<GetPrayerPromise>> {
    const request = await httpClient({
      url: `${prayers}`,
    });

    return request.data;
  },
  async postPrayer(payload: PostPrayer): Promise<PostPrayerPromise> {
    const {title, parentId} = payload;
    const request = await httpClient({
      method: 'post',
      url: `${columns}/${parentId}${prayers}`,
      data: {
        title,
        description: '',
        checked: false,
      },
    });
    console.log('post prayer request', request.data);
    return request.data;
  },
  async changePrayer(payload: ChangePrayerRequest): Promise<LoadPrayer> {
    const {title, id, description, checked} = payload;
    const request = await httpClient({
      method: 'put',
      url: `${prayers}/${id}`,
      data: {
        title,
        description: description === null || '' ? '' : description,
        checked: checked,
      },
    });
    console.log('post prayer request', request.data);
    return request.data;
  },
  async deletePrayer(id: number) {
    await httpClient({
      method: 'delete',
      url: `${prayers}/${id}`,
    });
  },
  async getComments(): Promise<Array<GetComment>> {
    const request: AxiosResponse<Array<GetComment>> = await httpClient({
      url: `${comments}`,
    });
    console.log('comments request', request);
    return request.data;
  },
};
