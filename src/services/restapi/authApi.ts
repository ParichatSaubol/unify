import useSWR from 'swr';
import httpClient from './httpClient';
import { OtpResponse } from './type';

const fetcher = (url: string) => httpClient.get(url).then(res => res.data);

export const login = async (username: string, password: string) => {
  try {
    const response = await httpClient.post('/login', {
      username,
      password,
    });
    return response;
  } catch (error: any) {
    console.log(error);
    throw new Error(error.response?.data?.message || 'Failed to login');
  }
};

export const loginWithPhone = async (phoneNumber: string) => {
  try {
    const response: OtpResponse = await httpClient.post('/getLoginOTP', {
      member_phone: phoneNumber,
    });
    console.log(response);
    return response.data;
  } catch (error: any) {
    console.log(error);
    throw new Error(error.response?.data?.message || 'Failed to login');
  }
};
