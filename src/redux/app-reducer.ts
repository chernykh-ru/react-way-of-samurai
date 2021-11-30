import { getAuthUserData } from './auth-reducer';
import { AppStateType } from './redux-store';
import { Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk'

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';

export type InitialStateType = {
  initialized: boolean,
}

const initialState: InitialStateType = {
  initialized: false,
}; //инициализируем стейт, initialized флаг того, что юзер залогинен(нет)

const appReducer = (state: InitialStateType = initialState, action: InitializedSuccessActionType): InitialStateType => {
  switch (action.type) {
    case INITIALIZED_SUCCESS: {
      return {
        ...state,
        initialized: true, // isAuth: true, //меняем флаг на true если пришли пользовательские данные
      };
    }
    default:
      return state;
  }
};//TS редьюсер на входе и на выходе должен принять и вернуть state: InitialStateType

type ActionsTypes = InitializedSuccessActionType

export type InitializedSuccessActionType = {
  type: typeof INITIALIZED_SUCCESS,
}//TS typeof на этапе компиляции выведет значение константы (строку 'INITIALIZED_SUCCESS')

//AC
export const initializedSuccess = (): InitializedSuccessActionType => ({
  type: INITIALIZED_SUCCESS,
}); //TS возвращаемое значение функции пишем после (параметров): и перед =>

//TC
type GetStateType = () => AppStateType//создаем "псевдоним" типа для getState
type DispatchType = Dispatch<ActionsTypes>//создаем "псевдоним" типа для dispatch
type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsTypes>

export const initializeApp = (): ThunkType => async (dispatch) => {
  let promise = dispatch(getAuthUserData()); //диспачим получение юзерских данных
  //dispatch(somethingelse())//диспачим получение любых других данных
  //и когда промис (в authAPI.me) зарезолвится, мы его здесь получим как результат promise и после этого мы задиспачим AC success
  // promise.then(() => {dispatch(initializedSuccess())})//если промис один
  Promise.all([promise]).then(() => dispatch(initializedSuccess()));
};

export default appReducer;
