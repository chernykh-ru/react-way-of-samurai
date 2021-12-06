// import axios from 'axios';
import { ProfileType, PhotosType } from '../types/types'
import { instance, BasicResponseType } from './api'

type SavePhotoResponseType = {
  photos: PhotosType
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
  async updateStatus(status: string) {
    const response = await instance.put<BasicResponseType>(`profile/status`, { status: status }); //вторым параметром передаем объект json
    return response.data;
  },
  async savePhoto(photoFile: File) {
    const formData = new FormData(); //Конструктор FormData() создаёт новые объект FormData, если проще - HTML-форму//https://developer.mozilla.org/ru/docs/Web/API/FormData/FormData
    formData.append('image', photoFile); //формируем formData по spec API
    const response = await instance.put<BasicResponseType<SavePhotoResponseType>>(`profile/photo`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    }); //вторым параметром передаем formData, а третьим объект со спец заголовками(необязательно, его формирует форма)
    return response.data;
  },
  async saveProfile(profile: ProfileType) {
    const response = await instance.put<BasicResponseType>(`profile`, profile); //вторым параметром передаем объект json из redux-form
    return response.data;
  },
};

// type ProfileAPIResponseType = {
//   resultCode: ResultCodeEnum
//   messages: string[]
//   data: {}
// } BasicResponseType

// type SavePhotoResponseType = {
//   data: {
//     photos: PhotosType
//   }
//   resultCode: ResultCodeEnum
//   messages: string[]
// }
