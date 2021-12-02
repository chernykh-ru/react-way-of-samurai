import { InferActionsTypes } from './redux-store';

// const ADD_MESSAGE = 'WAY-OF-SAMURAI/DIALOG/ADD-MESSAGE';


type DialogsType = {
  id: number | null,
  name: string | null
}
type MessagesType = {
  id: number | null,
  message: string | null
}

// const initialState = {
//   dialogs: [] as Array<DialogsType>,
//   messages: [] as Array<MessagesType>,
// };

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
    case 'WAY-OF-SAMURAI/DIALOG/ADD-MESSAGE':
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
// type ActionsTypes = AddMessageActionType

export const actions = {
  addMessage: (message: string) => ({ type: 'WAY-OF-SAMURAI/DIALOG/ADD-MESSAGE', message } as const),
}

// type AddMessageActionType = {
//   type: typeof ADD_MESSAGE,
//   message: string,
// }//типизация action creator

// export const addMessage: (message: string) => AddMessageActionType = (message) => ({ type: ADD_MESSAGE, message });

// export const addMessage = (message: string): AddMessageActionType => ({ type: ADD_MESSAGE, message });

// type GetStateType = () => AppStateType//создаем "псевдоним" типа для getState
// type DispatchType = Dispatch<ActionsTypes>//создаем "псевдоним" типа для dispatch
// type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsTypes>

export default dialogsReducer;
