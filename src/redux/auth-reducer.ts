import { ResultCodeEnum, ResultCodeForCaptchaEnam } from '../api/api';
import { authAPI } from '../api/auth-api';
import { securityAPI } from '../api/security-api';
import { FormAction, stopSubmit } from 'redux-form';//add @types/redux-form
import { InferActionsTypes, BasicThunkType } from './redux-store';
// import { Action } from 'redux';
// import { ThunkAction } from 'redux-thunk'

// const SET_USER_DATA = 'RWOS/AUTH/SET_USER_DATA'; //add redux-ducks
// const SET_CAPTCHA_URL_SUCCESS = 'RWOS/AUTH/SET_CAPTCHA_URL_SUCCESS';

const initialState = {
  userId: null as number | null,
  email: null as string | null,
  login: null as string | null,
  isAuth: false as boolean, //isAuth флаг того, что юзер залогинен
  captchaUrl: null as string | null, //по наличию капчи в стейте отображаем капчу и поле ввода в форме на странице логина
}; //инициализируем стейт согласно данным из API response

const authReducer = (state: InitialStateType = initialState, action: ActionsTypes): InitialStateType => {
  switch (action.type) {
    case 'RWOS/AUTH/SET_USER_DATA': {
      return {
        ...state,
        ...action.payload, //в экшене будет сидеть объект data,который мы деструктурируем
      };
    }
    case 'RWOS/AUTH/SET_CAPTCHA_URL_SUCCESS': {
      return {
        ...state,
        captchaUrl: action.captchaUrl,
      };
    }
    default:
      return state;
  }
};

// type ActionsTypes = SetAuthUserDataActionType | SetCaptchaUrlSuccessActionType

export const actions = {
  setAuthUserData: (userId: number | null, email: string | null, login: string | null, isAuth: boolean, captchaUrl: string | null = null) => ({
    type: 'RWOS/AUTH/SET_USER_DATA',
    payload: { userId, email, login, isAuth, captchaUrl },
  } as const), //AC деструктурируем объект data до составляющих userId, email, login, isAuth true, зануляем капчу
  setCaptchaUrlSuccess: (captchaUrl: string | null) => ({
    type: 'RWOS/AUTH/SET_CAPTCHA_URL_SUCCESS', //
    captchaUrl,
  } as const),
}

export type InitialStateType = typeof initialState
type ActionsTypes = InferActionsTypes<typeof actions>
type ThunkType = BasicThunkType<ActionsTypes | FormAction>//расширяем типами экшенов для redux-form
// type ThunkType = BasicThunkType<ActionsTypes | ReturnType<typeof stopSubmit>>//расширяем типами экшенов для redux-form

//TC
// type GetStateType = () => AppStateType//создаем "псевдоним" типа для getState
// type DispatchType = Dispatch<ActionsTypes>//создаем "псевдоним" типа для dispatch
// type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsTypes>

export const getAuthUserData = (): ThunkType => async (dispatch) => {
  const data = await authAPI.me();
  if (data.resultCode === ResultCodeEnum.Success) {
    const { id, email, login } = data.data;
    dispatch(actions.setAuthUserData(id, email, login, true)); //isAuth true
  }
};//added TS API, ResultCodeEnum

//TC to login and logout
export const login = (email: string, password: string, rememberMe: boolean, captcha: string | null): ThunkType => async (dispatch) => {
  const data = await authAPI.login(email, password, rememberMe, captcha);
  if (data.resultCode === ResultCodeEnum.Success) {
    dispatch(getAuthUserData());
  } else {
    if (data.resultCode === ResultCodeForCaptchaEnam.CaptchaIsRequired) {
      dispatch(getCaptchaUrl());
    } //при ответе сервера 10 диспачим санку на получение капчи
    // let action = stopSubmit('login', { email: 'Email is wrong' }); //встроенный экш редакс-форм, передаем в него имя формы(_error - или общую ошибку формы), вторым параметром передаем объект с проблемными полями, которые вызвали ошибку
    let message = data.messages.length > 0 ? data.messages[0] : 'some error';
    dispatch(stopSubmit('login', { _error: message })); //диспачим экшен с именем формы и объектом с общей ощибкой формы и причиной
  }//Fix dispatch: any dispatch(stopSubmit('login', { _error: message }))
};

export const logout = (): ThunkType => async (dispatch) => {
  const data = await authAPI.logout();
  if (data.resultCode === ResultCodeEnum.Success) {
    dispatch(actions.setAuthUserData(null, null, null, false)); //при логауте зануляем все данные и ставим флаг isAuth false
  }
};

export const getCaptchaUrl = (): ThunkType => async (dispatch) => {
  const data = await securityAPI.getCaptchaUrl();
  dispatch(actions.setCaptchaUrlSuccess(data.url));
}; //получаем капчу с сервера

export default authReducer;
