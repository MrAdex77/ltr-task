import {API_URL} from '@env';
import axios, {AxiosError} from 'axios';
import {ApiError, LoginResponse} from '../types/common';

export const login = async (email: string, password: string) => {
  try {
    const response = await axios.post<LoginResponse>(`${API_URL}/auth/login`, {
      email,
      password,
    });
    return response.data.data;
  } catch (error) {
    const axiosError = error as AxiosError<{error: {message: string}}>;
    const msg = axiosError.response?.data?.error?.message || 'Login failed';
    throw new ApiError(msg);
  }
};
