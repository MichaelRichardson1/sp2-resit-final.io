import axios from 'axios';
import { LOGIN_URL } from '../constants/api';

const token = axios.create({
  baseURL: LOGIN_URL,
});

token.interceptors.request.use(config => {
  const accessToken = localStorage.getItem('accessToken');
  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }
  return config;
});

export default token;