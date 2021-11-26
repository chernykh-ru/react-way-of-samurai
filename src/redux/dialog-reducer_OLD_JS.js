const ADD_MESSAGE = 'WAY-OF-SAMURAI/DIALOG/ADD-MESSAGE'; //add redux-ducks

let initialState = {
  dialogs: [
    {
      id: 1,
      name: 'Andrew',
    },
    {
      id: 2,
      name: 'Dmitry',
    },
    {
      id: 3,
      name: 'Petya',
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
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      return {
        ...state,
        messages: [...state.messages, { id: 4, message: action.message }],
      };
    default:
      return state;
  }
};

//создаем функции action creator для message, которая возвращает объект {action}
export const addMessage = (message) => ({ type: ADD_MESSAGE, message });

export default dialogsReducer;
