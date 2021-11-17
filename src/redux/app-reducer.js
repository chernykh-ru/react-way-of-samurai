import { getAuthUserData } from './auth-reducer';
const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';

let initialState = {
  initialized: false,
}; //инициализируем стейт, initialized флаг того, что юзер залогинен(нет)

const appReducer = (state = initialState, action) => {
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
};

//AC
export const initializedSuccess = () => ({
  type: INITIALIZED_SUCCESS,
}); //задиспачив экшен поменяем флаг на true

//TC
export const initializeApp = () => (dispatch) => {
  let promise = dispatch(getAuthUserData()); //диспачим получение юзерских данных
  //dispatch(somethingelse())//диспачим получение любых других данных
  //и когда промис (в auth.me) зарезолвится, после этого мы задиспачим AC success
  // promise.then(() => {dispatch(initializedSuccess())})//если промис один
  Promise.all([promise]).then(() => dispatch(initializedSuccess()));
};

export default appReducer;
  