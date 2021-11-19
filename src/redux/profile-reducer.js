import { usersAPI, profileAPI } from '../api/api';
const ADD_POST = 'WAY-OF-SAMURAI/PROFILE/ADD-POST'; //add redux-ducks
// const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USERS_PROFILE = 'WAY-OF-SAMURAI/PROFILE/SET_USERS_PROFILE';
const SET_STATUS = 'WAY-OF-SAMURAI/PROFILE/SET_STATUS';
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
      // let newPost = action.newPostText;//add redux-form
      return {
        ...state,
        // newPostText: '',//add redux-form
        posts: [...state.posts, { id: 4, message: action.newPostText }], //добавляем новый элемент в массив
      };
    case DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter((p) => p.id !== action.postId), //jest test
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

export default profileReducer;
