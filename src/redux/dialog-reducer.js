const ADD_MESSAGE = 'WAY-OF-SAMURAI/DIALOG/ADD-MESSAGE'; //add redux-ducks
// const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';//add redux-form

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
      name: 'Sveta',
      avatar: 'https://i.pinimg.com/originals/5a/f1/dd/5af1ddcde07255e8a999abcc061dd201.png',
    },
    { id: 4, name: 'Sasha' },
    { id: 5, name: 'Valera' },
    { id: 6, name: 'Viktor' },
  ],
  messages: [
    { id: 1, message: 'Hi' },
    { id: 2, message: 'How is your it?' },
    { id: 3, message: 'I am fine' },
  ],
  // newMessageText: '',//add redux-form
};

const dialogsReducer = (state = initialState, action) => {
  // let stateCopy; //объявляем переменную копиистейта
  switch (action.type) {
    case ADD_MESSAGE:
      // let newMessage = state.newMessageText;//add redux-form
      // stateCopy = {
      //   ...state,
      //   newMessageText: '', //зануляем поле ввода
      //   messages: [...state.messages, { id: 4, message: newMessage }], //спрэдим стейт на нужную глубину и добавляем в конец(пушим) новый элемент массива
      // };
      return {
        ...state,
        // newMessageText: '', //зануляем поле ввода//add redux-form
        messages: [...state.messages, { id: 4, message: action.message }],
      };
    // case UPDATE_NEW_MESSAGE_TEXT:
    //   // stateCopy = {
    //   //   ...state,
    //   //   newMessageText: action.newText,
    //   // };
    //   return { ...state, newMessageText: action.newText };//add redux-form
    default:
      return state;
  }
};

//создаем функции action creator для message, которая возвращает объект {action}
export const addMessageActionCreator = (message) => ({ type: ADD_MESSAGE, message });

// export const updateNewMessageTextActionCreator = (text) => ({
//   type: UPDATE_NEW_MESSAGE_TEXT,
//   newText: text,
// });//add redux-form

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
