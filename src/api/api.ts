import axios from 'axios';
import { ProfileType, UsersType, PhotosType } from '../types/types'

const instance = axios.create({
  withCredentials: true,
  headers: { 'API-KEY': '6e65516f-e614-437d-93bf-9e85e40713b5' },
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
}); //создаем инстанс запроса(с параметрами запроса)

//=== Users API
type GetUsersResponseType = {
  items: UsersType[]
  totalCount: number
  error: string
}

type FollowUnfollowResponseType = {
  resultCode: ResultCodeEnum
  messages: string[]
  data: {}
}

export const usersAPI = {
  getUsers(currentPage: number, pageSize: number | null) {
    return instance //обращаемся уже к инстансу запроса
      .get<GetUsersResponseType>(`users?page=${currentPage}&count=${pageSize}`)
      .then((response) => response.data); //промисом вернем не весь ответ а нужную часть data
  },
  async follow(userId: number) {
    const response = await instance.post<FollowUnfollowResponseType>(`follow/${userId}`);
    return response.data;
  },
  async unfollow(userId: number) {
    const response = await instance.delete<FollowUnfollowResponseType>(`follow/${userId}`);
    return response.data;
  },
};
//=== Users API ===//

//=== Profile API

type ProfileAPIResponseType = {
  resultCode: ResultCodeEnum
  messages: string[]
  data: {}
}

type SavePhotoResponseType = {
  data: {
    photos: PhotosType
  }
  resultCode: ResultCodeEnum
  messages: string[]
}

export const profileAPI = {
  async getProfile(userId: number | null) {
    const response = await instance.get<ProfileType>(`profile/${userId}`);
    return response.data;
  },
  async getStatus(userId: number | null) {
    const response = await instance.get<string>(`profile/status/${userId}`);
    return response.data;
  },
  async updateStatus(status: string | null) {
    const response = await instance.put<ProfileAPIResponseType>(`profile/status`, { status: status }); //вторым параметром передаем объект json
    return response.data;
  },
  async savePhoto(photoFile: any) {
    const formData = new FormData(); //Конструктор FormData() создаёт новые объект FormData, если проще - HTML-форму//https://developer.mozilla.org/ru/docs/Web/API/FormData/FormData
    formData.append('image', photoFile); //формируем formData по spec API
    const response = await instance.put<SavePhotoResponseType>(`profile/photo`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    }); //вторым параметром передаем formData, а третьим объект со спец заголовками(необязательно, его формирует форма)
    return response.data;
  },
  async saveProfile(profile: ProfileType) {
    const response = await instance.put<ProfileAPIResponseType>(`profile`, profile); //вторым параметром передаем объект json из redux-form
    return response.data;
  },
};
//=== Profile API ===//

export enum ResultCodeEnum {
  Success = 0,
  Error = 1,
}//added types for result code API

export enum ResultCodeForCaptcha {
  CaptchaIsRequired = 10,
}

//=== Auth API
type MeResponseType = {
  data: {
    id: number
    email: string
    login: string
  }
  resultCode: ResultCodeEnum
  // resultCode: number
  messages: string[]
}

type LoginResponseType = {
  resultCode: ResultCodeEnum | ResultCodeForCaptcha
  messages: string[]
  data: {
    userId: number
  }
}

type LogoutResponseType = {
  resultCode: ResultCodeEnum
  messages: string[]
  data: {}
}

type GetCaptchaUrlResponseType = {
  url: string
}

export const authAPI = {
  async me() {
    const response = await instance.get<MeResponseType>(`auth/me`);
    return response.data;
  },
  async login(email: string, password: string, rememberMe: boolean = false, captcha: string | null = null) {
    const response = await instance.post<LoginResponseType>(`auth/login`, {
      email: email,
      password: password,
      rememberMe: rememberMe,
      captcha: captcha,
    });
    return response.data;
  },
  async logout() {
    const response = await instance.delete<LogoutResponseType>(`auth/login`);
    return response.data;
  },
};

export const securityAPI = {
  async getCaptchaUrl() {
    const response = await instance.get<GetCaptchaUrlResponseType>(`security/get-captcha-url`);
    return response.data;
  },
};
//=== Auth API ===//

// instance.get<string>(`auth/me`).then((response: AxiosResponse<string>) => response.data.toUpperCase())
// instance.get<string>(`auth/me`).then(response => response.data.toUpperCase())


