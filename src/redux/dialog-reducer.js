const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
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
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      let newMessage = state.newMessageText; //берем значение из стейта
      state.messages.push({ id: 4, message: newMessage });
      state.newMessageText = '';
      return state;
    case UPDATE_NEW_MESSAGE_TEXT:
      state.newMessageText = action.newText;
      return state;
    default:
      return state;
  }
};

//создаем функции action creator для message, которая возвращает объект {action}
export const addMessageActionCreator = () => ({ type: ADD_MESSAGE });

export const updateNewMessageTextActionCreator = (text) => ({
  type: UPDATE_NEW_MESSAGE_TEXT,
  newText: text,
});

// const dialogsReducer = (state, action) => {
//   if (action.type === ADD_MESSAGE) {
//     let newMessage = state.newMessageText; //берем значение из стейта
//     state.messages.push({ id: 4, message: newMessage });
//     state.newMessageText = ''; //переносим логику зануление из тупого компонента в функцию стейта
//   } else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
//     state.newMessageText = action.newText;
//   }
//   return state;
// };

export default dialogsReducer;
