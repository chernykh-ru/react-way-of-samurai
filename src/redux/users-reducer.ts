import { usersAPI, ResultCodeEnum } from '../api/api';
import { updateObjectInArray } from '../utils/object-helpers';
import {PhotosType, UsersType} from '../types/types'
import { AppStateType, InferActionsTypes } from './redux-store';
import { Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk'

// const FOLLOW = 'WAY-OF-SAMURAI/USERS/FOLLOW'; //add redux-ducks
// const UNFOLLOW = 'WAY-OF-SAMURAI/USERS/UNFOLLOW';
// const SET_USERS = 'WAY-OF-SAMURAI/USERS/SET_USERS';
// const SET_CURRENT_PAGE = 'WAY-OF-SAMURAI/USERS/SET_CURRENT_PAGE';
// const SET_TOTAL_USERS_COUNT = 'WAY-OF-SAMURAI/USERS/SET_TOTAL_USERS_COUNT';
// const TOGGLE_IS_FETCHING = 'WAY-OF-SAMURAI/USERS/TOGGLE_IS_FETCHING';
// const TOGGLE_IS_FOLLOWING_PROGRESS = 'WAY-OF-SAMURAI/USERS/TOGGLE_IS_FOLLOWING_PROGRESS';

let initialState = {
  users: [] as Array<UsersType>,
  pageSize: 10 as number,//remove | null
  totalUsersCount: 0 as number,//remove | null
  currentPage: 1 as number,//remove | null
  isFetching: true as boolean,
  followingInProgress: [] as Array<number | null>,//array of users Id
};

export type InitialStateType = typeof initialState

const usersReducer = (state: InitialStateType = initialState, action: ActionsTypes): InitialStateType => {
  switch (action.type) {
    //======
    //рефакторинг, вынесение дублирующей логики из follow и unfollow во вспомогутальную функцию updateObjectInArray из утилит
    case 'FOLLOW' :
      return {
        ...state, //создаем копию стейта(работать можем только с копией)
        users: updateObjectInArray(state.users, action.userId, 'id', { followed: true }),
      };
    case 'UNFOLLOW':
      return {
        ...state,
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
    case 'SET_USERS': {
      return {
        ...state,
        users: action.users, //перезатираем массив юзеров
        // users: [...state.users, ...action.users],
      }; //с сервера придут пользователи, мы должны взять старый стейт(сделать копию) и дополнить его новыми пользователями пришедшими из экшна (склеить два массива спред оператором)
    }
    case 'SET_CURRENT_PAGE': {
      return {
        ...state,
        currentPage: action.currentPage,
      };
    }
    case 'SET_TOTAL_USERS_COUNT': {
      return {
        ...state,
        totalUsersCount: action.totalUsersCount,
      };
    }
    case 'TOGGLE_IS_FETCHING': {
      return {
        ...state,
        isFetching: action.isFetching,
      };
    }
    case 'TOGGLE_IS_FOLLOWING_PROGRESS': {
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

// //ACTypes
// type ActionsTypes = FollowSuccessActionType | UnfollowSuccessActionType | SetUsersActionType | SetCurrentPageActionType | SetTotalUsersCountActionType | ToggleIsFetchingActionType | ToggleFollowingProgressActionType

// type FollowSuccessActionType = {
  //   type: typeof FOLLOW,
  //   userId: number | null
  // }
  // type UnfollowSuccessActionType = {
    //   type: typeof UNFOLLOW,
    //   userId: number | null
    // }
    // type SetUsersActionType = {
      //   type: typeof SET_USERS,
      //   users: Array<UsersType>
      // }
      // type SetCurrentPageActionType = {
        //   type: typeof SET_CURRENT_PAGE,
//   currentPage: number
// }//remove | null
// type SetTotalUsersCountActionType = {
  //   type: typeof SET_TOTAL_USERS_COUNT,
  //   totalUsersCount: number
  // }//remove | null
  // type ToggleIsFetchingActionType = {
//   type: typeof TOGGLE_IS_FETCHING,
//   isFetching: boolean
// }
// type ToggleFollowingProgressActionType = {
  //   type: typeof TOGGLE_IS_FOLLOWING_PROGRESS,
  //   isFetching: boolean,
  //   userId: number | null
  //   // userId: Array<number | null>
  // }
  
type ActionsTypes = InferActionsTypes<typeof actions>
//выносим AC в объект
export const actions = {
  followSuccess: (userId: number | null) => ({ type: 'FOLLOW', userId } as const), //переименуем из-за thunkCreate
  unfollowSuccess: (userId: number | null) => ({ type: 'UNFOLLOW', userId }) as const, //переименуем из-за thunkCreate
  setUsers: (users: Array<UsersType>) => ({ type: 'SET_USERS', users } as const), //возьмем данные о юзерах с сервера и поместим их потом в стейт
  setCurrentPage: (currentPage: number) => ({ type: 'SET_CURRENT_PAGE', currentPage } as const),//remove | null
  setTotalUsersCount: (totalUsersCount: number) => ({
    type: 'SET_TOTAL_USERS_COUNT',
    totalUsersCount, //когда ключ и значение не одинаковы(специально)
  } as const),//remove | null
  toggleIsFetching: (isFetching: boolean) => ({
    type: 'TOGGLE_IS_FETCHING',
    isFetching,
  } as const),
  toggleFollowingProgress: (isFetching: boolean, userId: number | null) => ({
    type: 'TOGGLE_IS_FOLLOWING_PROGRESS',
    isFetching,
    userId,
  } as const),
}


//создаем функции thunk creator, которая создает(возвращает) thunk(dispatch action)
type GetStateType = () => AppStateType//создаем "псевдоним" типа для getState
type DispatchType = Dispatch<ActionsTypes>//создаем "псевдоним" типа для dispatch
type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsTypes>

export const requestUsers = (page: number, pageSize: number | null): ThunkAction<Promise<void>, AppStateType, unknown, ActionsTypes> => async (dispatch, getState) => {
  dispatch(actions.setCurrentPage(page)); //from onPageChanged(активная страница)
  dispatch(actions.toggleIsFetching(true)); //запрос ушел preloader виден
  const data = await usersAPI.getUsers(page, pageSize);
  dispatch(actions.toggleIsFetching(false)); //запрос пришел preloader скрывается
  dispatch(actions.setUsers(data.items)); // у usersAPI дергаем метод getUsers//получаем user из data(данные) items(объект с юзерами) и диспачим setUsers
  dispatch(actions.setTotalUsersCount(data.totalCount));
}; //remove page | null

//рефакторинг, вынесение дублирующей логики из follow и unfollow в функцию followUnfollowFlow
const _followUnfollowFlow = async (dispatch: DispatchType, userId: number | null, apiMethod: any, actionCreator: (userId: number | null) => ActionsTypes) => {
  dispatch(actions.toggleFollowingProgress(true, userId));
  const data = await apiMethod(userId);
  if (data.resultCode === ResultCodeEnum.Success) {
    dispatch(actionCreator(userId));
  } //если отписка произошла и сервер подтвердил(resultCode === 0) диспачим в редьюсер
  dispatch(actions.toggleFollowingProgress(false, userId));
};

export const follow = (userId: number | null): ThunkType => async (dispatch) => {
  _followUnfollowFlow(dispatch, userId, usersAPI.follow.bind(usersAPI), actions.followSuccess);
};//типизируем TC по типу ThunkType

export const unfollow = (userId: number | null): ThunkType => async (dispatch) => {
  _followUnfollowFlow(dispatch, userId, usersAPI.unfollow.bind(usersAPI), actions.unfollowSuccess);
};

export default usersReducer;
