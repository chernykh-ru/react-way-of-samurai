import { usersAPI } from '../api/api';
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
export const followSuccess = (userId) => ({ type: FOLLOW, userId }); //переименуем из-за thunkCreate
export const unfollowSuccess = (userId) => ({ type: UNFOLLOW, userId }); //переименуем из-за thunkCreate
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

//создаем функции thunk creator, которая создает(возвращает) thunk(dispatch action)
//переименовываем AC без окончания AC
export const getUsers = (currentPage, pageSize) => {
  // debugger;
  return (dispatch) => {
    dispatch(setCurrentPage(currentPage)); //from onPageChanged(активная страница)
    dispatch(toggleIsFetching(true)); //запрос ушел preloader виден
    usersAPI.getUsers(currentPage, pageSize).then((data) => {
      dispatch(toggleIsFetching(false)); //запрос пришел preloader скрывается
      dispatch(setUsers(data.items)); // у usersAPI дергаем метод getUsers//получаем user из data(данные) items(объект с юзерами) и диспачим setUsers
      dispatch(setTotalUsersCount(data.totalCount));
    });
  };
};

export const follow = (userId) => {
  return (dispatch) => {
    dispatch(toggleFollowingProgress(true, userId));
    usersAPI.follow(userId).then((data) => {
      if (data.resultCode === 0) {
        dispatch(followSuccess(userId));
      } //если подписка произошла и сервер подтвердил(resultCode === 0) диспачим в редьюсер
      dispatch(toggleFollowingProgress(false, userId));
    });
  };
};

export const unfollow = (userId) => {
  return (dispatch) => {
    dispatch(toggleFollowingProgress(true, userId));
    usersAPI.unfollow(userId).then((data) => {
      if (data.resultCode === 0) {
        dispatch(unfollowSuccess(userId));
      } //если отписка произошла и сервер подтвердил(resultCode === 0) диспачим в редьюсер
      dispatch(toggleFollowingProgress(false, userId));
    });
  };
};

export default usersReducer;
