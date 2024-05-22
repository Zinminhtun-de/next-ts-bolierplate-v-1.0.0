import axios, { AxiosError, AxiosResponse, InternalAxiosRequestConfig } from 'axios';

import { DecryptLocalStorage } from './ls';

const appAxios = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_API_URL}/api`,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

appAxios.interceptors.request.use(
  async (config: InternalAxiosRequestConfig) => {
    if (config.headers) {
      if (DecryptLocalStorage(`${process.env.NEXT_PUBLIC_TOKEN_LS_KEY}`)) {
        config.headers['Authorization'] =
          `Bearer ${DecryptLocalStorage(`${process.env.NEXT_PUBLIC_TOKEN_LS_KEY}`)?.token}`;
        config.headers['accept-language'] =
          DecryptLocalStorage(`${process.env.NEXT_PUBLIC_TOKEN_LS_KEY}`)?.language === 'my'
            ? 'mm'
            : DecryptLocalStorage(`${process.env.NEXT_PUBLIC_TOKEN_LS_KEY}`)?.language;
        // config.headers['accept-language'] = language;
      }
    }
    return config;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);

appAxios.interceptors.response.use(
  async (response: AxiosResponse) => {
    if (!response.data) {
      return Promise.reject(response);
    }
    return response;
  },
  async (error: AxiosError) => {
    return Promise.reject(error);
    // return alert(error.message);
  }
);

export default appAxios;
