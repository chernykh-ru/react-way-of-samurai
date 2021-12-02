// import axios from 'axios';
import { UsersType } from '../types/types'
import { instance, BasicResponseType } from './api'

type GetUsersResponseType = {
  items: UsersType[]
  totalCount: number
  error: string
}

export const usersAPI = {
  getUsers(currentPage: number, pageSize: number | null) {
    return instance //обращаемся уже к инстансу запроса
      .get<GetUsersResponseType>(`users?page=${currentPage}&count=${pageSize}`)
      .then((response) => response.data); //промисом вернем не весь ответ а нужную часть data
  },
  async follow(userId: number) {
    const response = await instance.post<BasicResponseType>(`follow/${userId}`);
    return response.data;
  },
  async unfollow(userId: number) {
    const response = await instance.delete<BasicResponseType>(`follow/${userId}`);
    return response.data;
  },
};

// type FollowUnfollowResponseType = {
//   resultCode: ResultCodeEnum
//   messages: string[]
//   data: {}
// }//BasicResponseType

