import axios from 'axios';

export const instance = axios.create({
  withCredentials: true,
  headers: { 'API-KEY': '6e65516f-e614-437d-93bf-9e85e40713b5' },
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
}); //создаем инстанс запроса(с параметрами запроса)

export enum ResultCodeEnum {
  Success = 0,
  Error = 1,
}//added types for result code API

export enum ResultCodeForCaptchaEnam {
  CaptchaIsRequired = 10,
}

export type BasicResponseType<D = {}, RC = ResultCodeEnum> = {
  data: D
  messages: string[]
  resultCode: RC
}

// export type BasicResponseType = {
//   resultCode: ResultCodeEnum
//   messages: string[]
//   data: {}
// }
