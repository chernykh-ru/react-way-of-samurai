import { ResultCodeEnum, BasicResponseType } from '../api/api';
import { usersAPI} from '../api/users-api';
import { updateObjectInArray } from '../utils/object-helpers';
import { UsersType} from '../types/types'
import { InferActionsTypes, BasicThunkType } from './redux-store';
// import { AppStateType, InferActionsTypes, BasicThunkType } from './redux-store';
import { Dispatch } from 'redux';
// import { ThunkAction } from 'redux-thunk'

const initialState = {
  users: [] as Array<UsersType>,
  pageSize: 10 as number,
  totalUsersCount: 0 as number,
  currentPage: 1 as number,
  isFetching: true as boolean,
  followingInProgress: [] as Array<number | null>,//array of users Id
  filter: {
    term: '',
    friend: null as null | boolean,
  }//add formik in URL
};


const usersReducer = (state: InitialStateType = initialState, action: ActionsTypes): InitialStateType => {
  switch (action.type) {
    case 'RWOS/USERS/FOLLOW' :
      return {
        ...state, //создаем копию стейта(работать можем только с копией)
        users: updateObjectInArray(state.users, action.userId, 'id', { followed: true }),
      };
    case 'RWOS/USERS/UNFOLLOW':
      return {
        ...state,
        users: updateObjectInArray(state.users, action.userId, 'id', { followed: false }),
      };
    case 'RWOS/USERS/SET_USERS': {
      return {
        ...state,
        users: action.users, //перезатираем массив юзеров
        // users: [...state.users, ...action.users],
      }; //с сервера придут пользователи, мы должны взять старый стейт(сделать копию) и дополнить его новыми пользователями пришедшими из экшна (склеить два массива спред оператором)
    }
    case 'RWOS/USERS/SET_CURRENT_PAGE': {
      return {
        ...state,
        currentPage: action.currentPage,
      };
    }
    case 'RWOS/USERS/SET_FILTER': {
      return {
        ...state,
        filter: action.payload,
      };//add formik term in URL
    }
    case 'RWOS/USERS/SET_TOTAL_USERS_COUNT': {
      return {
        ...state,
        totalUsersCount: action.totalUsersCount,
      };
    }
    case 'RWOS/USERS/TOGGLE_IS_FETCHING': {
      return {
        ...state,
        isFetching: action.isFetching,
      };
    }
    case 'RWOS/USERS/TOGGLE_IS_FOLLOWING_PROGRESS': {
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

// type ActionsTypes = InferActionsTypes<typeof actions>
//выносим AC в объект
export const actions = {
  followSuccess: (userId: number | null) => ({ type: 'RWOS/USERS/FOLLOW', userId } as const), //переименуем из-за thunkCreate
  unfollowSuccess: (userId: number | null) => ({ type: 'RWOS/USERS/UNFOLLOW', userId }) as const, //переименуем из-за thunkCreate
  setUsers: (users: Array<UsersType>) => ({ type: 'RWOS/USERS/SET_USERS', users } as const), //возьмем данные о юзерах с сервера и поместим их потом в стейт
  setCurrentPage: (currentPage: number) => ({ type: 'RWOS/USERS/SET_CURRENT_PAGE', currentPage } as const),
  setFilter: (filter: FilterType) => ({ type: 'RWOS/USERS/SET_FILTER', payload: filter } as const),///add formik term in URL
  setTotalUsersCount: (totalUsersCount: number) => ({
    type: 'RWOS/USERS/SET_TOTAL_USERS_COUNT',
    totalUsersCount, //когда ключ и значение не одинаковы(специально)
  } as const),
  toggleIsFetching: (isFetching: boolean) => ({
    type: 'RWOS/USERS/TOGGLE_IS_FETCHING',
    isFetching,
  } as const),
  toggleFollowingProgress: (isFetching: boolean, userId: number | null) => ({
    type: 'RWOS/USERS/TOGGLE_IS_FOLLOWING_PROGRESS',
    isFetching,
    userId,
  } as const),
}

//создаем функции thunk creator, которая создает(возвращает) thunk(dispatch action)
// type GetStateType = () => AppStateType//создаем "псевдоним" типа для getState
// type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsTypes>
// type DispatchType = Dispatch<ActionsTypes>//создаем "псевдоним" типа для dispatch
export type InitialStateType = typeof initialState
export type FilterType = typeof initialState.filter
type ThunkType = BasicThunkType<ActionsTypes>
type ActionsTypes = InferActionsTypes<typeof actions>

export const requestUsers = (page: number, pageSize: number, filter: FilterType): ThunkType => async (dispatch, getState) => {
  dispatch(actions.toggleIsFetching(true)); //запрос ушел preloader виден
  dispatch(actions.setCurrentPage(page)); //from onPageChanged(активная страница)
  dispatch(actions.setFilter(filter));//add formik term in URL
  const data = await usersAPI.getUsers(page, pageSize, filter.term, filter.friend);//add formik term in URL
  dispatch(actions.toggleIsFetching(false)); //запрос пришел preloader скрывается
  dispatch(actions.setUsers(data.items)); // у usersAPI дергаем метод getUsers//получаем user из data(данные) items(объект с юзерами) и диспачим setUsers
  dispatch(actions.setTotalUsersCount(data.totalCount));
}; //remove page | null

//рефакторинг, вынесение дублирующей логики из follow и unfollow в функцию followUnfollowFlow
const _followUnfollowFlow = async (dispatch: Dispatch<ActionsTypes>, userId: number | null, apiMethod: (userId: number | null) => Promise<BasicResponseType>, actionCreator: (userId: number | null) => ActionsTypes) => {
  dispatch(actions.toggleFollowingProgress(true, userId));
  const data = await apiMethod(userId);
  if (data.resultCode === ResultCodeEnum.Success) {
    dispatch(actionCreator(userId));
  } //если отписка произошла и сервер подтвердил(resultCode === 0) диспачим в редьюсер
  dispatch(actions.toggleFollowingProgress(false, userId));
};

export const follow = (userId: number | null): ThunkType => async (dispatch) => {
  await _followUnfollowFlow(dispatch, userId, usersAPI.follow.bind(usersAPI), actions.followSuccess);
};//типизируем TC по типу ThunkType

export const unfollow = (userId: number | null): ThunkType => async (dispatch) => {
  await _followUnfollowFlow(dispatch, userId, usersAPI.unfollow.bind(usersAPI), actions.unfollowSuccess);
};

export default usersReducer;
