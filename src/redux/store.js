//выносим константы в глобальную область видимости
import profileReducer from './profile-reducer';
import dialogsReducer from './dialog-reducer';
import sidebarReducer from './sidebar-reducer';

//переносим константы к редьюсерам
// const ADD_POST = 'ADD-POST';
// const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
// const ADD_MESSAGE = 'ADD-MESSAGE';
// const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: 'Hi, how are you?', likeCounter: 15 },
        { id: 2, message: 'My first react post', likeCounter: 25 },
        { id: 3, message: 'Yo', likeCounter: 5 },
      ],
      newPostText: '',
    },
    dialogsPage: {
      // avatar: [
      //   {id: 1, avatar: 'https://author.today/content/2020/02/29/5f7d802fc35d4cbdacea7161f5f45212.jpg'},
      //   {id: 2, avatar: 'https://i.pinimg.com/originals/9c/77/46/9c7746225873e02d83b9315501b8dd2f.jpg'},
      //   {id: 3, avatar: 'https://i.pinimg.com/originals/5a/f1/dd/5af1ddcde07255e8a999abcc061dd201.png'},
      //   // {id: 4, name: 'Sveta'},
      //   // {id: 5, name: 'Valera'},
      //   // {id: 6, name: 'Viktor'}
      // ],
      dialogs: [
        {
          id: 1,
          name: 'Andrew',
          avatar: 'https://author.today/content/2020/02/29/5f7d802fc35d4cbdacea7161f5f45212.jpg',
        },
        {
          id: 2,
          name: 'Dmitry',
          avatar: 'https://i.pinimg.com/originals/9c/77/46/9c7746225873e02d83b9315501b8dd2f.jpg',
        },
        {
          id: 3,
          name: 'Sasha',
          avatar: 'https://i.pinimg.com/originals/5a/f1/dd/5af1ddcde07255e8a999abcc061dd201.png',
        },
        { id: 4, name: 'Sveta' },
        { id: 5, name: 'Valera' },
        { id: 6, name: 'Viktor' },
      ],
      messages: [
        { id: 1, message: 'Hi' },
        { id: 2, message: 'How is your it?' },
        { id: 3, message: 'I am fine' },
      ],
      newMessageText: '',
      // messagesFriend: [
      //   { id: 1, message: 'Yo-yo-yo' },
      //   { id: 2, message: 'Yo-yo' },
      //   { id: 3, message: 'Yo' },
      // ],
    },
    sidebar: {},
  },
  _callSubscriber() {
    console.log('State changed');
  },
  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action); //отдаем редьюсеру нужный стейт и экшн
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.sidebar = sidebarReducer(this._state.sidebar, action);

    this._callSubscriber(this._state); //уведопляем всех подписчиков

    // if (action.type === ADD_POST) {
    //   let newPost = {
    //     id: 4,
    //     message: this._state.profilePage.newPostText, //берем значение из стейта
    //     likeCounter: 0,
    //   };
    //   this._state.profilePage.posts.push(newPost);
    //   this._state.profilePage.newPostText = ''; //переносим логику зануление из тупого компонента в функцию стейта
    //   this._callSubscriber(this._state);
    // } else if (action.type === UPDATE_NEW_POST_TEXT) {
    //   this._state.profilePage.newPostText = action.newText;
    //   this._callSubscriber(this._state);
    // } else if (action.type === ADD_MESSAGE) {
    //   let newMessage = this._state.dialogsPage.newMessageText; //берем значение из стейта
    //   this._state.dialogsPage.messages.push({ id: 4, message: newMessage });
    //   this._state.dialogsPage.newMessageText = ''; //переносим логику зануление из тупого компонента в функцию стейта
    //   this._callSubscriber(this._state);
    // } else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
    //   this._state.dialogsPage.newMessageText = action.newText;
    //   this._callSubscriber(this._state);
    // }
  },
};

// //создаем функции action creator, которая возвращает объект {action}, после чего переносим их в стейт

// export const addPostActionCreator = () => ({ type: ADD_POST }); //выносим константу в клобальную область видимости

// // export const addPostActionCreator = () => {
// //   return { type: ADD_POST }; //выносим константу в клобальную область видимости
// //   // return { type: 'ADD-POST' };
// // };

// export const updateNewPostTextActionCreator = (text) => {
//   return {
//     type: UPDATE_NEW_POST_TEXT,
//     newText: text,
//   };
// };

// //создаем функции action creator для message, которая возвращает объект {action}
// export const addMessageActionCreator = () => ({ type: ADD_MESSAGE });

// export const updateNewMessageTextActionCreator = (text) => ({
//   type: UPDATE_NEW_MESSAGE_TEXT,
//   newText: text,
// });

export default store;
