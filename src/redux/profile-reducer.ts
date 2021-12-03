import { ResultCodeEnum } from '../api/api';
import { profileAPI } from '../api/profile-api';
import { FormAction, stopSubmit } from 'redux-form';
import {PostType, PhotosType, ProfileType} from '../types/types'
import { InferActionsTypes, BasicThunkType } from './redux-store';
// import { Dispatch } from 'redux';
// import { ThunkAction } from 'redux-thunk'

// const ADD_POST = 'RWOS/PROFILE/ADD-POST'; //add redux-ducks
// const SET_USERS_PROFILE = 'RWOS/PROFILE/SET_USERS_PROFILE';
// const SET_STATUS = 'RWOS/PROFILE/SET_STATUS';
// const SAVE_PHOTO_SUCCESS = 'RWOS/PROFILE/SAVE_PHOTO_SUCCESS';
// const DELETE_POST = 'RWOS/PROFILE/DELETE_POST';

let initialState = {
  posts: [
    { id: 1, message: 'Hi, how are you?', likeCounter: 15 },
    { id: 2, message: 'My first react post', likeCounter: 25 },
    { id: 3, message: 'Yo', likeCounter: 5 },
  ] as Array<PostType>,
  newPostText: '' as string | null,
  profile: null as unknown as ProfileType,
  status: '' as string | null,
};

export type InitialStateType = typeof initialState

const profileReducer = (state: InitialStateType = initialState, action: ActionsTypes): InitialStateType => {
  switch (action.type) {
    case 'RWOS/PROFILE/ADD-POST':
      return {
        ...state,
        posts: [...state.posts, { id: 4, message: action.newPostText, likeCounter: 0 }], //добавляем новый элемент в массив
      };
    case 'RWOS/PROFILE/DELETE_POST':
      return {
        ...state,
        posts: state.posts.filter((p) => p.id !== action.postId), //jest test
      };
    case 'RWOS/PROFILE/SET_USERS_PROFILE':
      return {
        ...state,
        profile: action.profile,
      };
    case 'RWOS/PROFILE/SET_STATUS':
      return {
        ...state,
        status: action.status,
      };
    case 'RWOS/PROFILE/SAVE_PHOTO_SUCCESS':
      return {
        ...state,
        profile: { ...state.profile, photos: action.photos },
      };
    default:
      return state;
  }
};

//AC
type ActionsTypes = InferActionsTypes<typeof actions>

export const actions = {
  addPostActionCreator: (newPostText: string | null) => ({ type: 'RWOS/PROFILE/ADD-POST', newPostText } as const),
  setUserProfile: (profile: ProfileType) => ({ type: 'RWOS/PROFILE/SET_USERS_PROFILE', profile } as const),  
  setStatus: (status: string | null) => ({ type: 'RWOS/PROFILE/SET_STATUS', status } as const),  
  savePhotoSuccess: (photos: PhotosType) => ({ type: 'RWOS/PROFILE/SAVE_PHOTO_SUCCESS', photos } as const),  
  deletePost: (postId: number | null) => ({ type: 'RWOS/PROFILE/DELETE_POST', postId } as const), //jest test  
}

//TC
// type GetStateType = () => AppStateType//создаем "псевдоним" типа для getState
// type DispatchType = Dispatch<ActionsTypes>//создаем "псевдоним" типа для dispatch
// type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsTypes>
// type ThunkType = BasicThunkType<ActionsTypes | ReturnType<typeof stopSubmit>>//расширяем типами экшенов для redux-form
type ThunkType = BasicThunkType<ActionsTypes | FormAction>//расширяем типами экшенов для redux-form


export const getUserProfile = (userId: number | null): ThunkType => async (dispatch) => {
  const data = await profileAPI.getProfile(userId);
  dispatch(actions.setUserProfile(data));
}; //convert to async/await

// export const getUserProfile = (userId) => {
//   return (dispatch) => {
//     usersAPI.getProfile(userId).then((data) => {
//       dispatch(setUserProfile(data));
//     });
//   };
// }; //with then

export const getStatus = (userId: number | null): ThunkType => async (dispatch) => {
  const data = await profileAPI.getStatus(userId);
  dispatch(actions.setStatus(data));
}; //convert to async/await

export const updateStatus = (status: string | null): ThunkType => async (dispatch) => {
  try {
    const data = await profileAPI.updateStatus(status);
    if (data.resultCode === ResultCodeEnum.Success) {
      dispatch(actions.setStatus(status)); //после подверждения сервера сетаем себе статус
    }
  } catch (error) {
    console.log('updateStatus error');
  }
}; //test try catch

export const savePhoto = (photoFile: File): ThunkType => async (dispatch) => {
  const data = await profileAPI.savePhoto(photoFile);
  if (data.resultCode === 0) {
    dispatch(actions.savePhotoSuccess(data.data.photos)); //диспачим полученные фото
    // dispatch(savePhotoSuccess(data.data.photos)); //диспачим полученные фото
  }
};

//TC отправка и получение данных профиля
export const saveProfile = (profile: ProfileType): ThunkType => async (dispatch, getState) => {
  const userId = getState().auth.userId; //в санку помимо диспача приходит стейт целиком, берем getState() и достаем из ветки auth нужный userId
  // console.log(userId);
  const data = await profileAPI.saveProfile(profile);
  if (data.resultCode === ResultCodeEnum.Success) {
    dispatch(getUserProfile(userId)); //диспачим id для получения новых данных с сервера после редатирования профиля
  } else {
    //встроенный экш редакс-форм, передаем в него имя формы(_error - или общую ошибку формы), вторым параметром передаем объект с проблемными полями, которые вызвали ошибку
    let message = data.messages.length > 0 ? data.messages[0] : 'some error';
    dispatch(stopSubmit('edit-profile', { _error: message })); //диспачим экшен с именем формы и объектом с общей ощибкой формы и причиной
    return Promise.reject(message); //решение с отображением ошибки формы
  }
};//Fix dispatch: any dispatch(stopSubmit('edit-profile', { _error: message }))

export default profileReducer;
