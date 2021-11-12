import axios from 'axios';

const instance = axios.create({
  withCredentials: true,
  headers: { 'API-KEY': '6e65516f-e614-437d-93bf-9e85e40713b5' },
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
}); //создаем инстанс запроса(с параметрами запроса)

export const usersAPI = {
  getUsers(currentPage, pageSize) {
    return instance //обращаемся уже к инстансу запроса
      .get(`users?page=${currentPage}&count=${pageSize}`)
      .then((response) => response.data); //промисом вернем не весь ответ а нужную часть data
  },
  async unfollow(userId) {
    const response = await instance.delete(`follow/${userId}`);
    return response.data;
  },
  async follow(userId) {
    const response = await instance.post(`follow/${userId}`);
    return response.data;
  },
  async getProfile(userId) {
    console.warn('Obsolete method. Please use profileAPI object');
    return profileAPI.getProfile(userId); //перенаправялем на новый метод с предупреждением
  },
};

export const profileAPI = {
  async getProfile(userId) {
    const response = await instance.get(`profile/${userId}`);
    return response.data;
  },
  async getStatus(userId) {
    const response = await instance.get(`profile/status/${userId}`);
    return response.data;
  },
  async updateStatus(status) {
    const response = await instance.put(`profile/status`, { status: status }); //вторым параметром передаем объект json
    return response.data;
  },
};

export const authAPI = {
  async me() {
    const response = await instance.get(`auth/me`);
    return response.data;
  },
};
