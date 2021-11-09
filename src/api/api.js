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
};

// export const getUsers = (currentPage, pageSize) => {
//   return instance //обращаемся уже к инстансу запроса
//     .get(`users?page=${currentPage}&count=${pageSize}`)
//     .then((response) => response.data); //промисом вернем не весь ответ а нужную часть data
// };

// export const getUsers = (currentPage, pageSize) => {
//   return axios
//     .get(
//       `https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`,
//       {
//         withCredentials: true,
//       }, //так же проверяем что пользователь залогинен и цепляем куки
//     )
//     .then((response) => response.data);//промисом вернем не весь ответ а нужную часть data
// };
