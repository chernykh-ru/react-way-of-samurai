import { usersAPI } from '../api/api';
import { updateObjectInArray } from '../utils/object-helpers';
const FOLLOW = 'WAY-OF-SAMURAI/USERS/FOLLOW'; //add redux-ducks
const UNFOLLOW = 'WAY-OF-SAMURAI/USERS/UNFOLLOW';
const SET_USERS = 'WAY-OF-SAMURAI/USERS/SET_USERS';
const SET_CURRENT_PAGE = 'WAY-OF-SAMURAI/USERS/SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'WAY-OF-SAMURAI/USERS/SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'WAY-OF-SAMURAI/USERS/TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'WAY-OF-SAMURAI/USERS/TOGGLE_IS_FOLLOWING_PROGRESS';

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
    //======
    //рефакторинг, вынесение дублирующей логики из follow и unfollow во вспомогутальную функцию updateObjectInArray из утилит
    case FOLLOW:
      return {
        ...state, //создаем копию стейта(работать можем только с копией)
        users: updateObjectInArray(state.users, action.userId, 'id', { followed: true }),
      };
    case UNFOLLOW:
      return {
        ...state, //создаем копию стейта(работать можем только с копией)
        users: updateObjectInArray(state.users, action.userId, 'id', { followed: false }),
      };
    //рефакторинг, вынесение дублирующей логики из follow и unfollow во вспомогутальную функцию updateObjectInArray из утилит
    //=====

    // case FOLLOW:
    //   return {
    //     ...state, //создаем копию стейта(работать можем только с копией)
    //     users: state.users.map((user) => {
    //       if (user.id === action.userId) {
    //         return { ...user, followed: true };
    //       } //мапим массив юзеров(если id юзера совпадает с id пришедшим из AC) то возвращаем в глубокую копию новый объект с добавленным статусом followed true у юзера
    //       return user; //если id не совпадает, возвращаем тот же самый объект юзер
    //     }),
    //   };
    // case UNFOLLOW:
    //   return {
    //     ...state, //создаем копию стейта(работать можем только с копией)
    //     users: state.users.map((user) => {
    //       if (user.id === action.userId) {
    //         return { ...user, followed: false };
    //       } //мапим массив юзеров(если id юзера совпадает с id пришедшим из AC) то возвращаем в глубокую копию новый объект с измененным статусом followed false у юзера
    //       return user; //если id не совпадает, возвращаем тот же самый объект юзер
    //     }),
    //   };
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
export const requestUsers = (page, pageSize) => async (dispatch) => {
  dispatch(setCurrentPage(page)); //from onPageChanged(активная страница)
  dispatch(toggleIsFetching(true)); //запрос ушел preloader виден
  const data = await usersAPI.getUsers(page, pageSize);
  dispatch(toggleIsFetching(false)); //запрос пришел preloader скрывается
  dispatch(setUsers(data.items)); // у usersAPI дергаем метод getUsers//получаем user из data(данные) items(объект с юзерами) и диспачим setUsers
  dispatch(setTotalUsersCount(data.totalCount));
}; //convert to async/await

// export const requestUsers = (page, pageSize) => {
//   // debugger;
//   return (dispatch) => {
//     dispatch(setCurrentPage(page)); //from onPageChanged(активная страница)
//     dispatch(toggleIsFetching(true)); //запрос ушел preloader виден
//     usersAPI.getUsers(page, pageSize).then((data) => {
//       dispatch(toggleIsFetching(false)); //запрос пришел preloader скрывается
//       dispatch(setUsers(data.items)); // у usersAPI дергаем метод getUsers//получаем user из data(данные) items(объект с юзерами) и диспачим setUsers
//       dispatch(setTotalUsersCount(data.totalCount));
//     });
//   };
// };//with then

//рефакторинг, вынесение дублирующей логики из follow и unfollow в функцию followUnfollowFlow
export const followUnfollowFlow = async (dispatch, userId, apiMethod, actionCreator) => {
  dispatch(toggleFollowingProgress(true, userId));
  const data = await apiMethod(userId);
  if (data.resultCode === 0) {
    dispatch(actionCreator(userId));
  } //если отписка произошла и сервер подтвердил(resultCode === 0) диспачим в редьюсер
  dispatch(toggleFollowingProgress(false, userId));
};

export const follow = (userId) => async (dispatch) => {
  // const apiMethod = usersAPI.follow.bind(usersAPI);
  // const actionCreator = followSuccess;
  followUnfollowFlow(dispatch, userId, usersAPI.follow.bind(usersAPI), followSuccess);

  // dispatch(toggleFollowingProgress(true, userId));
  // const data = await apiMethod(userId);
  // if (data.resultCode === 0) {
  //   dispatch(actionCreator(userId));
  // } //если подписка произошла и сервер подтвердил(resultCode === 0) диспачим в редьюсер
  // dispatch(toggleFollowingProgress(false, userId));
}; //convert to async/await

export const unfollow = (userId) => async (dispatch) => {
  // const apiMethod = usersAPI.unfollow.bind(usersAPI);
  // const actionCreator = unfollowSuccess;
  followUnfollowFlow(dispatch, userId, usersAPI.unfollow.bind(usersAPI), unfollowSuccess);

  // dispatch(toggleFollowingProgress(true, userId));
  // const data = await apiMethod(userId);
  // if (data.resultCode === 0) {
  //   dispatch(actionCreator(userId));
  // } //если отписка произошла и сервер подтвердил(resultCode === 0) диспачим в редьюсер
  // dispatch(toggleFollowingProgress(false, userId));
}; //convert to async/await

export default usersReducer;