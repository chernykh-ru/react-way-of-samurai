import { authAPI } from '../api/api';
import { stopSubmit } from 'redux-form';
const SET_USER_DATA = 'SET_USER_DATA';
const SET_USER_LOGIN_DATA = 'SET_USER_LOGIN_DATA';

let initialState = {
  userId: null,
  email: null,
  login: null,
  isAuth: false,
}; //инициализируем стейт согласно данным из API response, isAuth флаг того, что юзер залогинен

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA: {
      return {
        ...state,
        ...action.payload, //в экшене будет сидеть объект data,который мы деструктурируем
        // isAuth: true, //меняем флаг на true если пришли пользовательские данные
      };
    }
    case SET_USER_LOGIN_DATA: {
      return {
        isAuth: true, //меняем флаг на true если пришли пользовательские данные
      };
    }
    default:
      return state;
  }
};

//AC
export const setAuthUserData = (userId, email, login, isAuth) => ({
  type: SET_USER_DATA,
  payload: { userId, email, login, isAuth },
}); //AC деструктурируем объект data до составляющих userId, email, login

//TC
export const getAuthUserData = () => (dispatch) => {
  return authAPI.me().then((data) => {
    if (data.resultCode === 0) {
      let { id, email, login } = data.data;
      dispatch(setAuthUserData(id, email, login, true)); //isAuth true
    }
  });
};

//TC to login and logout
export const login = (email, password, rememberMe) => (dispatch) => {
  authAPI.login(email, password, rememberMe).then((data) => {
    if (data.resultCode === 0) {
      dispatch(getAuthUserData());
    } else {
      // let action = stopSubmit('login', { email: 'Email is wrong' }); //встроенный экш редакс-форм, передаем в него имя формы(_error - или общую ошибку формы), вторым параметром передаем объект с проблемными полями, которые вызвали ошибку
      let message = data.messages.length > 0 ? data.messages[0] : 'some error';
      dispatch(stopSubmit('login', { _error: message })); //диспачим экшен с именем формы и объектом с общей ощибкой формы и причиной
    }
  });
};

export const logout = () => (dispatch) => {
  authAPI.logout().then((data) => {
    if (data.resultCode === 0) {
      dispatch(setAuthUserData(null, null, null, false)); //при логауте зануляем все данные и ставим флаг isAuth false
    }
  });
};

// export const login = (email, password, rememberMe) => (dispatch) => {
//   authAPI.login(email, password, rememberMe).then((response) => {
//     if (response.data.resultCode === 0) {
//       dispatch(getAuthUserData()); //диспачим метод
//     }
//   });
// };

// export const logout = () => (dispatch) => {
//   authAPI.logout().then((response) => {
//     if (response.data.resultCode === 0) {
//       dispatch(getAuthUserData(null, null, null, false)); //при логауте зануляем все данные и ставим флаг isAuth false
//     }
//   });
// };

export default authReducer;
