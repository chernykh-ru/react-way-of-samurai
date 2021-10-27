const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

const dialogsReducer = (state, action) => {
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
