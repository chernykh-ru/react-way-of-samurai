const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

let initialState = {
  users: [
    // {
    //   id: 1,
    //   photoUrl: 'https://author.today/content/2020/02/29/5f7d802fc35d4cbdacea7161f5f45212.jpg',
    //   followed: false,
    //   fullName: 'Dmitry',
    //   status: 'i am teacher',
    //   location: { city: 'Minsk', country: 'Belarus' },
    // },
    // {
    //   id: 2,
    //   photoUrl: 'https://i.pinimg.com/originals/9c/77/46/9c7746225873e02d83b9315501b8dd2f.jpg',
    //   followed: true,
    //   fullName: 'Vasiliy',
    //   status: 'i am student',
    //   location: { city: 'Moscow', country: 'Russia' },
    // },
    // {
    //   id: 3,
    //   photoUrl: 'https://i.pinimg.com/originals/5a/f1/dd/5af1ddcde07255e8a999abcc061dd201.png',
    //   followed: false,
    //   fullName: 'Petro',
    //   status: 'i am student from ua',
    //   location: { city: 'Dnepr', country: 'Ukraine' },
    // },
  ],
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state, //создаем копию стейта(работать можем только с копией)
        users: state.users.map((user) => {
          if (user.id === action.userId) {
            return { ...user, followed: true };
          } //мапим массив юзеров(если id юзера совпадает с id пришедшим из AC) то возвращаем в глубокую копию новый объект с добавленным статусом followed true у юзера
          return user; //если id не совпадает, возвращаем тот же самый объект юзер
        }),
      };
    case UNFOLLOW:
      return {
        ...state, //создаем копию стейта(работать можем только с копией)
        users: state.users.map((user) => {
          if (user.id === action.userId) {
            return { ...user, followed: false };
          } //мапим массив юзеров(если id юзера совпадает с id пришедшим из AC) то возвращаем в глубокую копию новый объект с измененным статусом followed false у юзера
          return user; //если id не совпадает, возвращаем тот же самый объект юзер
        }),
      };
    case SET_USERS: {
      return {
        ...state,
        users: [...state.users, ...action.users],
      }; //с сервера придут пользователи, мы должны взять старый стейт(сделать копию) и дополнить его новыми пользователями пришедшими из экшна (склеить два массива спред оператором)
    }
    default:
      return state;
  }
};

//создаем функции action creator, которая создает(возвращает) объект действие {action}
export const followAC = (userId) => ({ type: FOLLOW, userId });
export const unfollowAC = (userId) => ({ type: UNFOLLOW, userId });
export const setUsersAC = (users) => ({ type: SET_USERS, users }); //возьмем данные о юзерах с сервера и поместим их потом в стейт

export default usersReducer;
