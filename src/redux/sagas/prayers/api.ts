import {BASE_URL, prayers} from '../../utils/urls';
import axios from 'axios';

export const Api = {
  async getPrayer(token): Promise<any> {
    console.log('api token', token);
    const request = await axios.get(`${BASE_URL}${prayers}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  
    return request.data;
  },
  async postPrayer(token, payload): Promise<any> {
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
  }
};