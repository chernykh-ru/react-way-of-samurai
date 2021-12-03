import { getAuthUserData } from './auth-reducer';
import { InferActionsTypes, BasicThunkType } from './redux-store';
// import { Dispatch } from 'redux';
// import { ThunkAction } from 'redux-thunk'

const initialState = {
  initialized: false as boolean,
}; //инициализируем стейт, initialized флаг того, что юзер залогинен(нет)
export type InitialStateType = typeof initialState


const appReducer = (state: InitialStateType = initialState, action: ActionsTypes): InitialStateType => {
  switch (action.type) {
    case 'RWOS/APP/INITIALIZED_SUCCESS': {
      return {
        ...state,
        initialized: true, // isAuth: true, //меняем флаг на true если пришли пользовательские данные
      };
    }
    default:
      return state;
  }
};//TS редьюсер на входе и на выходе должен принять и вернуть state: InitialStateType


//AC
type ActionsTypes = InferActionsTypes<typeof actions>

export const actions = {
  initializedSuccess: () => ({
    type: 'RWOS/APP/INITIALIZED_SUCCESS',
  } as const)
}

//TC
// type GetStateType = () => AppStateType//создаем "псевдоним" типа для getState
// type DispatchType = Dispatch<ActionsTypes>//создаем "псевдоним" типа для dispatch
// type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsTypes>
type ThunkType = BasicThunkType<ActionsTypes>


export const initializeApp = (): ThunkType => async (dispatch) => {
  let promise = dispatch(getAuthUserData()); //диспачим получение юзерских данных
  //dispatch(somethingelse())//диспачим получение любых других данных
  //и когда промис (в authAPI.me) зарезолвится, мы его здесь получим как результат promise и после этого мы задиспачим AC success
  // promise.then(() => {dispatch(initializedSuccess())})//если промис один
  Promise.all([promise]).then(() => dispatch(actions.initializedSuccess()));
};

export default appReducer;
