import { InferActionsTypes } from './redux-store';
import { DialogsType, MessagesType } from '../types/types'

// export type DialogsType = {
//   id: number | null,
//   name: string | null
// }
// export type MessagesType = {
//   id: number | null,
//   message: string | null
// }

const initialState = {
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
  ] as DialogsType[],
  messages: [
    { id: 1, message: 'Hi' },
    { id: 2, message: 'How is your it?' },
    { id: 3, message: 'I am fine' },
  ] as MessagesType[],
};

export type InitialStateType = typeof initialState

const dialogsReducer = (state: InitialStateType = initialState, action: ActionsTypes): InitialStateType => {
  switch (action.type) {
    case 'RWOS/DIALOG/ADD-MESSAGE':
      return {
        ...state,
        messages: [...state.messages, { id: 4, message: action.message }],
      };
    default:
      return state;
  }
};

type ActionsTypes = InferActionsTypes<typeof actions>

//AC
export const actions = {
  addMessage: (message: string) => ({ type: 'RWOS/DIALOG/ADD-MESSAGE', message } as const),
}

export default dialogsReducer;
