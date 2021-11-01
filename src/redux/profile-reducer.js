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
  switch (action.type) {
    case ADD_POST:
      let newPost = state.newPostText;
      return {
        ...state,
        newPostText: '',
        posts: [...state.posts, { id: 4, message: newPost }], //добавляем новый элемент в массив
      };
    case UPDATE_NEW_POST_TEXT:
      return {
        ...state,
        newPostText: action.newText,
      };
    default:
      return state;
  }
};

// const profileReducer = (state = initialState, action) => {
//   // debugger;
//   switch (action.type) {
//     case ADD_POST: {
//       let newPost = {
//         id: 4,
//         message: state.newPostText, //берем значение из стейта
//         likeCounter: 0,
//       };
//       let stateCopy = { ...state };
//       stateCopy.posts = [...state.posts]; //из за поверхностной копии стейта отдельно копируем массив постов []
//       stateCopy.posts.push(newPost); //в новую копию стейта будем пушить новые посты
//       // state.posts.push(newPost); //this._state.profilePage = state из пропсов
//       // stateCopy.newPostText = [...state.newPostText];//не нужно потому что newPostText примитив строка
//       stateCopy.newPostText = '';
//       // state.newPostText = '';
//       return stateCopy;
//     }
//     case UPDATE_NEW_POST_TEXT: {
//       let stateCopy = { ...state };
//       stateCopy.newPostText = action.newText;
//       // state.newPostText = action.newText;
//       return stateCopy;
//     }
//     default:
//       // let stateCopy = { ...state };
//       // return stateCopy;
//       return state;
//   }
// };

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
