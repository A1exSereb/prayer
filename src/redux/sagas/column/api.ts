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
  }
};
