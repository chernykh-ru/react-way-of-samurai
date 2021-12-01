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
  // async getProfile(userId) {
  //   console.warn('Obsolete method. Please use profileAPI object');
  //   return profileAPI.getProfile(userId); //перенаправялем на новый метод с предупреждением
  // },
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
  async savePhoto(photoFile) {
    const formData = new FormData(); //Конструктор FormData() создаёт новые объект FormData, если проще - HTML-форму//https://developer.mozilla.org/ru/docs/Web/API/FormData/FormData
    formData.append('image', photoFile); //формируем formData по spec API
    const response = await instance.put(`profile/photo`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    }); //вторым параметром передаем formData, а третьим объект со спец заголовками(необязательно, его формирует форма)
    return response.data;
  },
  async saveProfile(profile) {
    const response = await instance.put(`profile`, profile); //вторым параметром передаем объект json из redux-form
    return response.data;
  },
};

export const authAPI = {
  async me() {
    const response = await instance.get(`auth/me`);
    return response.data;
  },
  async login(email, password, rememberMe = false, captcha = null) {
    const response = await instance.post(`auth/login`, {
      email: email,
      password: password,
      rememberMe: rememberMe,
      captcha: captcha,
    });
    return response.data;
  },
  async logout() {
    const response = await instance.delete(`auth/login`);
    return response.data;
  },
  // login(email, password, rememberMe = false) {
  //   return instance.post(`auth/login`, {
  //     email: email,
  //     password: password,
  //     rememberMe: rememberMe,
  //   });
  // },
  // logout() {
  //   return instance.delete(`auth/login`);
  // },
};

export const securityAPI = {
  async getCaptchaUrl() {
    const response = await instance.get(`security/get-captcha-url`);
    return response.data;
  },
};
