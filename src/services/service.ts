import {signin, signup, columns, prayers, comments} from '../store/utils/urls';
import {
  GetColumnPromise,
  GetComment,
  GetPrayerPromise,
  PostColumn,
  PostColumnPromise,
  PostCommentResponse,
  PostPrayer,
  PostPrayerPromise,
  SignIn,
  SignInPromise,
  SignUp,
  SignUpPromise,
} from '../store/utils/types';
import httpClient from '../store/utils/prayerInstance';
import {AxiosResponse} from 'axios';
import {ChangePrayerRequest, LoadPrayer} from '../store/ducks/prayers/types';

export const Api = {
  async signUp(payload: SignUp): Promise<SignUpPromise> {
    const {email, password, name} = payload;

    const request = await httpClient.post(`${signup}`, {
      email,
      password,
      name,
    });

    console.log('request', request);
    return request.data;
  },
  async signIn(payload: SignIn): Promise<AxiosResponse<SignInPromise>> {
    const {email, password} = payload;

    const request = await httpClient.post(`${signin}`, {
      email,
      password,
    });

    return request.data;
  },
  async getColumn(): Promise<Array<GetColumnPromise>> {
    const request: AxiosResponse<Array<GetColumnPromise>> =
      await httpClient.get(`${columns}`);

    return request.data;
  },
  async postColumn(payload: PostColumn): Promise<PostColumnPromise> {
    const {title, description} = payload;
    const request = await httpClient.post(`${columns}`, {
      title,
      description,
    });

    console.log('request data', request.data);
    return request.data;
  },
  async getPrayer(): Promise<Array<GetPrayerPromise>> {
    const request = await httpClient.get(`${prayers}`);

    return request.data;
  },
  async postPrayer(payload: PostPrayer): Promise<PostPrayerPromise> {
    const {title, parentId} = payload;
    const request = await httpClient.post(`${columns}/${parentId}${prayers}`, {
      title,
      description: '',
      checked: false,
    });
    console.log('post prayer request', request.data);
    return request.data;
  },
  async changePrayer(payload: ChangePrayerRequest): Promise<LoadPrayer> {
    const {title, id, description, checked} = payload;
    const request = await httpClient.put(`${prayers}/${id}`, {
      title,
      description: description === null || '' ? '' : description,
      checked: checked,
    });
    console.log('post prayer request', request.data);
    return request.data;
  },
  async deletePrayer(id: number) {
    await httpClient.delete(`${prayers}/${id}`);
  },
  async getComments(): Promise<Array<GetComment>> {
    const request: AxiosResponse<Array<GetComment>> = await httpClient.get(
      `${comments}`,
    );
    console.log('comments request', request);
    return request.data;
  },
  async postComment({
    parentId,
    title,
  }: {
    parentId: number;
    title: string;
  }): Promise<PostCommentResponse> {
    console.log('call postComment');
    const request: AxiosResponse<PostCommentResponse> = await httpClient.post(
      `${prayers}/${parentId}${comments}`,
      {body: title},
    );
    console.log('comments post request', request.data);
    return request.data;
  },
};
