// import axios from 'axios';
import { UsersType } from '../types/types'
import { instance, BasicResponseType } from './api'

type GetUsersResponseType = {
  items: UsersType[]
  totalCount: number
  error: string
}

export const usersAPI = {
  getUsers(currentPage = 1, pageSize = 10, term: string = '', friend: null | boolean = null) {
  // getUsers(currentPage: number, pageSize: number | null, term: string = '', friend: null | boolean = null) {
    return instance //обращаемся уже к инстансу запроса
      .get<GetUsersResponseType>(`users?page=${currentPage}&count=${pageSize}&term=${term}` + (friend === null ? '' : `&friend=${friend}`))//add formik term and friend in URL
      .then((response) => response.data); //промисом вернем не весь ответ а нужную часть data
  },
  async follow(userId: number | null) {
    const response = await instance.post<BasicResponseType>(`follow/${userId}`);
    return response.data;
  },
  async unfollow(userId: number | null) {
    const response = await instance.delete<BasicResponseType>(`follow/${userId}`);
    return response.data;
  },
};

// type FollowUnfollowResponseType = {
//   resultCode: ResultCodeEnum
//   messages: string[]
//   data: {}
// }//BasicResponseType

