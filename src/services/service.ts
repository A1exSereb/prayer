import {signin, signup, columns, prayers, comments} from '../store/utils/urls';
import {
  CreateColumnDto,
  SignInDto,
  SignUpDto,
  Column,
  Prayer,
  SignUpResponse,
  SignInResponse,
  CreatePrayerDto,
  CreatePrayerResponse,
  UpdatePrayerDto,
  Comment,
  CreateCommentDto,
  CreateCommentResponse,
} from '../types';
import httpClient from '../store/utils/prayerInstance';

export const Api = {
  async signUp(payload: SignUpDto): Promise<SignUpResponse> {
    const {email, password, name} = payload;

    const request = await httpClient.post(`${signup}`, {
      email,
      password,
      name,
    });

    console.log('request', request);
    return request.data;
  },
  async signIn(payload: SignInDto): Promise<SignInResponse> {
    const {email, password} = payload;

    const request = await httpClient.post(`${signin}`, {
      email,
      password,
    });

    return request.data;
  },
  async getColumn(): Promise<Column> {
    const request = await httpClient.get(`${columns}`);

    return request.data;
  },
  async createColumn(payload: CreateColumnDto): Promise<Column> {
    const {title, description} = payload;
    const request = await httpClient.post(`${columns}`, {
      title,
      description,
    });

    return request.data;
  },
  async getPrayer(): Promise<Array<Prayer>> {
    const request = await httpClient.get(`${prayers}`);

    return request.data;
  },
  async createPrayer(payload: CreatePrayerDto): Promise<CreatePrayerResponse> {
    const {title, parentId} = payload;
    const request = await httpClient.post(`${columns}/${parentId}${prayers}`, {
      title,
      description: '',
      checked: false,
    });
    console.log('post prayer request', request.data);
    return request.data;
  },
  async changePrayer(payload: UpdatePrayerDto): Promise<Prayer> {
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
  async getComments(): Promise<Array<Comment>> {
    const request = await httpClient.get(`${comments}`);
    return request.data;
  },
  async createComment(
    payload: CreateCommentDto,
  ): Promise<CreateCommentResponse> {
    const request = await httpClient.post(
      `${prayers}/${payload.parentId}${comments}`,
      {
        body: payload.title,
      },
    );
    return request.data;
  },
};
