const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';

let initialState = {
  users: [],
  pageSize: 10,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: true,
  followingInProgress: [],
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
        users: action.users, //перезатираем массив юзеров
        // users: [...state.users, ...action.users],
      }; //с сервера придут пользователи, мы должны взять старый стейт(сделать копию) и дополнить его новыми пользователями пришедшими из экшна (склеить два массива спред оператором)
    }
    case SET_CURRENT_PAGE: {
      return {
        ...state,
        currentPage: action.currentPage,
      };
    }
    case SET_TOTAL_USERS_COUNT: {
      return {
        ...state,
        totalUsersCount: action.count,
      };
    }
    case TOGGLE_IS_FETCHING: {
      return {
        ...state,
        isFetching: action.isFetching,
      };
    }
    case TOGGLE_IS_FOLLOWING_PROGRESS: {
      return {
        ...state,
        followingInProgress: action.isFetching
          ? [...state.followingInProgress, action.userId] //если isF true добавляем в массив id из экшена
          : state.followingInProgress.filter((id) => id !== action.userId), //если isF false фильтрация вернут новый массив
      };
    }
    default:
      return state;
  }
};

//создаем функции action creator, которая создает(возвращает) объект действие {action}
//переименовываем AC без окончания AC(хак с mdtp )
export const follow = (userId) => ({ type: FOLLOW, userId });
export const unfollow = (userId) => ({ type: UNFOLLOW, userId });
export const setUsers = (users) => ({ type: SET_USERS, users }); //возьмем данные о юзерах с сервера и поместим их потом в стейт
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage });
export const setTotalUsersCount = (totalUsersCount) => ({
  type: SET_TOTAL_USERS_COUNT,
  count: totalUsersCount, //когда ключ и значение не одинаковы(специально)
});
export const toggleIsFetching = (isFetching) => ({
  type: TOGGLE_IS_FETCHING,
  isFetching,
});
export const toggleFollowingProgress = (isFetching, userId) => ({
  type: TOGGLE_IS_FOLLOWING_PROGRESS,
  isFetching,
  userId,
});

export default usersReducer;
