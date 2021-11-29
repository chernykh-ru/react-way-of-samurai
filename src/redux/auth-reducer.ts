import { authAPI, securityAPI } from '../api/api';
import { stopSubmit } from 'redux-form';//add @types/redux-form
const SET_USER_DATA = 'WAY-OF-SAMURAI/AUTH/SET_USER_DATA'; //add redux-ducks
// const SET_USER_LOGIN_DATA = 'WAY-OF-SAMURAI/AUTH/SET_USER_LOGIN_DATA';
const SET_CAPTCHA_URL_SUCCESS = 'WAY-OF-SAMURAI/AUTH/SET_CAPTCHA_URL_SUCCESS';

export type InitialStateType = {
  userId: number | null,
  email: string | null,
  login: string | null,
  isAuth: boolean,
  captchaUrl: string | null,
}

let initialState: InitialStateType = {
  userId: null,
  email: null,
  login: null,
  isAuth: false, //isAuth флаг того, что юзер залогинен
  captchaUrl: null, //по наличию капчи в стейте отображаем капчу и поле ввода в форме на странице логина
}; //инициализируем стейт согласно данным из API response

// let initialState = {
//   userId: null as number | null,
//   email: null as string | null,
//   login: null as string | null,
//   isAuth: false as boolean, //isAuth флаг того, что юзер залогинен
//   captchaUrl: null string | null, //по наличию капчи в стейте отображаем капчу и поле ввода в форме на странице логина
// }; //инициализируем стейт согласно данным из API response

// export type InitialStateType = typeof initialState

const authReducer = (state: InitialStateType = initialState, action: SetAuthUserDataActionType | SetCaptchaUrlSuccessActionType): InitialStateType => {
  switch (action.type) {
    case SET_USER_DATA: {
      return {
        ...state,
        ...action.payload, //в экшене будет сидеть объект data,который мы деструктурируем
      };
    }
    // case SET_USER_LOGIN_DATA: {
    //   return {
    //     isAuth: true, //меняем флаг на true если пришли пользовательские данные
    //   };
    // }
    case SET_CAPTCHA_URL_SUCCESS: {
      return {
        ...state,
        captchaUrl: action.captchaUrl,
      };
    }
    default:
      return state;
  }
};

type SetAuthUserDataActionPayloadType = {
  userId: number | null, email: string | null, login: string | null, isAuth: boolean, captchaUrl: string | null
}

export type SetAuthUserDataActionType = {
  type: typeof SET_USER_DATA,
  payload: SetAuthUserDataActionPayloadType
}

export type SetCaptchaUrlSuccessActionType = {
  type: typeof SET_CAPTCHA_URL_SUCCESS,
  captchaUrl: string | null
}
//AC
export const setAuthUserData = (userId: number | null, email: string | null, login: string | null, isAuth: boolean, captchaUrl: string | null = null): SetAuthUserDataActionType => ({
  type: SET_USER_DATA,
  payload: { userId, email, login, isAuth, captchaUrl },
}); //AC деструктурируем объект data до составляющих userId, email, login, isAuth true, зануляем капчу

export const setCaptchaUrlSuccess = (captchaUrl: string | null): SetCaptchaUrlSuccessActionType => ({
  type: SET_CAPTCHA_URL_SUCCESS, //
  captchaUrl,
});

//TC

export const getAuthUserData = () => async (dispatch: any) => {
  const data = await authAPI.me();
  if (data.resultCode === 0) {
    let { id, email, login } = data.data;
    dispatch(setAuthUserData(id, email, login, true)); //isAuth true
  }
};

//TC to login and logout
export const login = (email: string, password: string, rememberMe: boolean, captcha: any) => async (dispatch: any) => {
  const data = await authAPI.login(email, password, rememberMe, captcha);
  if (data.resultCode === 0) {
    dispatch(getAuthUserData());
  } else {
    if (data.resultCode === 10) {
      dispatch(getCaptchaUrl());
    } //при ответе сервера 10 диспачим санку на получение капчи
    // let action = stopSubmit('login', { email: 'Email is wrong' }); //встроенный экш редакс-форм, передаем в него имя формы(_error - или общую ошибку формы), вторым параметром передаем объект с проблемными полями, которые вызвали ошибку
    let message = data.messages.length > 0 ? data.messages[0] : 'some error';
    dispatch(stopSubmit('login', { _error: message })); //диспачим экшен с именем формы и объектом с общей ощибкой формы и причиной
  }
};

export const logout = () => async (dispatch: any) => {
  const data = await authAPI.logout();
  if (data.resultCode === 0) {
    dispatch(setAuthUserData(null, null, null, false)); //при логауте зануляем все данные и ставим флаг isAuth false
  }
};

export const getCaptchaUrl = () => async (dispatch: any) => {
  const data = await securityAPI.getCaptchaUrl();
  dispatch(setCaptchaUrlSuccess(data.url));
}; //получаем капчу с сервера

// export const getAuthUserData = () => (dispatch) => {
//   return authAPI.me().then((data) => {
//     if (data.resultCode === 0) {
//       let { id, email, login } = data.data;
//       dispatch(setAuthUserData(id, email, login, true)); //isAuth true
//     }
//   });
// };//with then

export default authReducer;
