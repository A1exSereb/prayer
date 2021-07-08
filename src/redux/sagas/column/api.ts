import AsyncStorage from '@react-native-async-storage/async-storage';
import {BASE_URL, columns} from '../../utils/urls';
import axios from 'axios';

export const Api = {
  async getColumn(): Promise<any> {
    const token = await AsyncStorage.getItem('token')
    const request = await axios.get(`${BASE_URL}${columns}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  
    return request.data;
  }
};
