import { usersAPI, profileAPI } from '../api/api';
const ADD_POST = 'ADD-POST';
// const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USERS_PROFILE = 'SET_USERS_PROFILE';
const SET_STATUS = 'SET_STATUS';

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
      // let newPost = action.newPostText;//add redux-form
      return {
        ...state,
        // newPostText: '',//add redux-form
        posts: [...state.posts, { id: 4, message: action.newPostText }], //добавляем новый элемент в массив
      };
    // case UPDATE_NEW_POST_TEXT:
    //   return {
    //     ...state,
    //     newPostText: action.newText,
    //   };//add redux-form
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
    default:
      return state;
  }
};

//создаем функции action creator, которая возвращает объект {action}, после чего переносим их в стейт
export const addPostActionCreator = (newPostText) => ({ type: ADD_POST, newPostText });

// export const updateNewPostTextActionCreator = (text) => {
//   return {
//     type: UPDATE_NEW_POST_TEXT,
//     newText: text,
//   };
// };//add redux-form

export const setUserProfile = (profile) => ({ type: SET_USERS_PROFILE, profile });

export const setStatus = (status) => ({ type: SET_STATUS, status });

//TC
export const getUserProfile = (userId) => {
  return (dispatch) => {
    usersAPI.getProfile(userId).then((data) => {
      dispatch(setUserProfile(data));
    });
  };
};

export const getStatus = (userId) => (dispatch) => {
  profileAPI.getStatus(userId).then((data) => {
    dispatch(setStatus(data));
  });
};

export const updateStatus = (status) => (dispatch) => {
  profileAPI.updateStatus(status).then((data) => {
    if (data.resultCode === 0) {
      dispatch(setStatus(status)); //после подверждения сервера сетаем себе статус
    }
  });
};

export default profileReducer;
