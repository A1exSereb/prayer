import {BASE_URL, columns} from '../../utils/urls';
import axios from 'axios';

export const Api = {
  async getColumn(token): Promise<any> {
    console.log('api token', token);
    const request = await axios.get(`${BASE_URL}${columns}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  
    return request.data;
  },
  async postColumn(token, payload): Promise<any> {
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
  }
};
