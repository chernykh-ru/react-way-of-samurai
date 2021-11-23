import { usersAPI, profileAPI } from '../api/api';
const ADD_POST = 'WAY-OF-SAMURAI/PROFILE/ADD-POST'; //add redux-ducks
const SET_USERS_PROFILE = 'WAY-OF-SAMURAI/PROFILE/SET_USERS_PROFILE';
const SET_STATUS = 'WAY-OF-SAMURAI/PROFILE/SET_STATUS';
const SAVE_PHOTO_SUCCESS = 'WAY-OF-SAMURAI/PROFILE/SAVE_PHOTO_SUCCESS';
const DELETE_POST = 'WAY-OF-SAMURAI/PROFILE/DELETE_POST';

let initialState = {
  posts: [
    { id: 1, message: 'Hi, how are you?', likeCounter: 15 },
    { id: 2, message: 'My first react post', likeCounter: 25 },
    { id: 3, message: 'Yo', likeCounter: 5 },
  ],
  newPostText: '',
  profile: null,
  status: '',
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        posts: [...state.posts, { id: 4, message: action.newPostText }], //добавляем новый элемент в массив
      };
    case DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter((p) => p.id !== action.postId), //jest test
      };
    case SET_USERS_PROFILE:
      return {
        ...state,
        profile: action.profile,
      };
    case SET_STATUS:
      return {
        ...state,
        status: action.status,
      };
    case SAVE_PHOTO_SUCCESS:
      return {
        ...state,
        profile: { ...state.profile, photos: action.photos },
      };
    default:
      return state;
  }
};

//создаем функции action creator, которая возвращает объект {action}, после чего переносим их в стейт
export const addPostActionCreator = (newPostText) => ({ type: ADD_POST, newPostText });

export const setUserProfile = (profile) => ({ type: SET_USERS_PROFILE, profile });

export const setStatus = (status) => ({ type: SET_STATUS, status });

export const savePhotoSuccess = (photos) => ({ type: SAVE_PHOTO_SUCCESS, photos });

export const deletePost = (postId) => ({ type: DELETE_POST, postId }); //jest test

//TC

export const getUserProfile = (userId) => async (dispatch) => {
  const data = await usersAPI.getProfile(userId);
  dispatch(setUserProfile(data));
}; //convert to async/await

// export const getUserProfile = (userId) => {
//   return (dispatch) => {
//     usersAPI.getProfile(userId).then((data) => {
//       dispatch(setUserProfile(data));
//     });
//   };
// }; //with then

export const getStatus = (userId) => async (dispatch) => {
  const data = await profileAPI.getStatus(userId);
  dispatch(setStatus(data));
}; //convert to async/await

export const updateStatus = (status) => async (dispatch) => {
  const data = await profileAPI.updateStatus(status);
  if (data.resultCode === 0) {
    dispatch(setStatus(status)); //после подверждения сервера сетаем себе статус
  }
}; //convert to async/await

export const savePhoto = (file) => async (dispatch) => {
  const data = await profileAPI.savePhoto(file);
  if (data.resultCode === 0) {
    dispatch(savePhotoSuccess(data.data.photos)); //диспачим полученные фото
  }
};

export default profileReducer;
