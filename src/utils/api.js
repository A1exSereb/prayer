import axios from 'axios';

export default axios.create({
  baseURL: 'https://prayer.herokuapp.com/api/#/',
  responseType: 'json',
});
