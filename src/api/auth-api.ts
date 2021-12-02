import { instance, BasicResponseType, ResultCodeEnum, ResultCodeForCaptchaEnam } from './api'


type MeResponseDataType = {
  id: number
  email: string
  login: string
}

type LoginResponseDataType = {
  userId: number
}

export const authAPI = {
  async me() {
    // const response = await instance.get<MeResponseType>(`auth/me`);
    const response = await instance.get<BasicResponseType<MeResponseDataType>>(`auth/me`);
    return response.data;
  },
  async login(email: string, password: string, rememberMe: boolean = false, captcha: string | null = null) {
    // const response = await instance.post<LoginResponseType>(`auth/login`, {
    const response = await instance.post<BasicResponseType<LoginResponseDataType, ResultCodeEnum | ResultCodeForCaptchaEnam>>(`auth/login`, {
      email: email,
      password: password,
      rememberMe: rememberMe,
      captcha: captcha,
    });
    return response.data;
  },
  async logout() {
    const response = await instance.delete<BasicResponseType>(`auth/login`);
    return response.data;
  },
};

//add BasicResponseType generic

// type MeResponseType = {
//   data: {
//     id: number
//     email: string
//     login: string
//   }
//   resultCode: ResultCodeEnum
//   messages: string[]
// }

// type LoginResponseType = {
//   resultCode: ResultCodeEnum | ResultCodeForCaptcha
//   messages: string[]
//   data: {
//     userId: number
//   }
// }

// type LogoutResponseType = {
//   resultCode: ResultCodeEnum
//   messages: string[]
//   data: {}

