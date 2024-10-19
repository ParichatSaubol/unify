import useSWR from 'swr';
import httpClient from './httpClient';
import { CheckOtpResponse, EmailLoginResponse, OtpResponse } from './type';

const fetcher = (url: string) => httpClient.get(url).then(res => res.data);

export const login = async (username: string, password: string) => {
  try {
    const response: EmailLoginResponse = await httpClient.post(
      '/appcall/login',
      {
        username,
        password,
      },
    );
    return response.data;
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
    return response.data;
  } catch (error: any) {
    console.log(error);
    throw new Error(error.response?.data?.message || 'Failed to login');
  }
};

export const checkOTP = async (ref: string, otp_id: string) => {
  try {
    const response: CheckOtpResponse = await httpClient.post('/checkOTP', {
      ref,
      otp_id,
    });
    return response.data;
  } catch (error: any) {
    console.log(error);
    throw new Error(error.response?.data?.message || 'Failed to check OTP');
  }
};
