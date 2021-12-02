// import axios from 'axios';
import { instance } from './api'

type GetCaptchaUrlResponseType = {
  url: string
}

export const securityAPI = {
  async getCaptchaUrl() {
    const response = await instance.get<GetCaptchaUrlResponseType>(`security/get-captcha-url`);
    return response.data;
  },
};