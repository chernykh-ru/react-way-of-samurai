const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
  posts: [
    { id: 1, message: 'Hi, how are you?', likeCounter: 15 },
    { id: 2, message: 'My first react post', likeCounter: 25 },
    { id: 3, message: 'Yo', likeCounter: 5 },
  ],
  newPostText: '',
};

const profileReducer = (state = initialState, action) => {
  // debugger;
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: 4,
        message: state.newPostText, //берем значение из стейта
        likeCounter: 0,
      };
      state.posts.push(newPost); //this._state.profilePage = state из пропсов
      state.newPostText = '';
      return { ...state };
    case UPDATE_NEW_POST_TEXT:
      state.newPostText = action.newText;
      return { ...state };
    default:
      return { ...state };
  }
};

//создаем функции action creator, которая возвращает объект {action}, после чего переносим их в стейт

export const addPostActionCreator = () => ({ type: ADD_POST }); //выносим константу в клобальную область видимости

// export const addPostActionCreator = () => {
//   return { type: ADD_POST }; //выносим константу в клобальную область видимости
//   // return { type: 'ADD-POST' };
// };

export const updateNewPostTextActionCreator = (text) => {
  return {
    type: UPDATE_NEW_POST_TEXT,
    newText: text,
  };
};

// const profileReducer = (state, action) => {
//   if (action.type === ADD_POST) {
//     let newPost = {
//       id: 4,
//       message: state.newPostText, //берем значение из стейта
//       likeCounter: 0,
//     };
//     state.posts.push(newPost); //this._state.profilePage = state из пропсов
//     state.newPostText = ''; //переносим логику зануление из тупого компонента в функцию стейта
//     // this._callSubscriber(this._state);//не его зона ответственности
//   } else if (action.type === UPDATE_NEW_POST_TEXT) {
//     state.newPostText = action.newText;
//     // this._callSubscriber(this._state);
//   }
//   return state;
// };

export default profileReducer;
