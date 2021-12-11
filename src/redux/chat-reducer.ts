import { ChatMessageType, chatAPI } from './../api/chat-api';
import { BasicThunkType, InferActionsTypes } from './redux-store';
import { Dispatch } from 'redux';

const initialState = {
  messages: [] as ChatMessageType[],
};

const chatReducer = (state: InitialStateType = initialState, action: ActionsTypes): InitialStateType => {
  switch (action.type) {
    case 'RWOS/CHAT/MESSAGES_RECEIVED': {
      return {
        ...state,
        messages: [...state.messages, ...action.payload.messages],
      };
    }
    default:
      return state;
  }
};

export const actions = {
  messagesReseived: (messages: ChatMessageType[]) => ({
    type: 'RWOS/CHAT/MESSAGES_RECEIVED',
    payload: { messages },
  } as const),
}

export type InitialStateType = typeof initialState
type ActionsTypes = InferActionsTypes<typeof actions>
type ThunkType = BasicThunkType<ActionsTypes>

//TC

let _newMessageHandler: ((messages: ChatMessageType[]) => void) | null = null
const newMessageHandlerCreator = (dispatch: Dispatch) => {
  if(_newMessageHandler === null) {
    _newMessageHandler = (messages) => {
      dispatch(actions.messagesReseived(messages))
      }//c HOCом передаем диспатч внутренней функции через замыкание
    };
  return _newMessageHandler
}
export const startMessagesListening = (): ThunkType => async (dispatch) => {
  chatAPI.start()
  chatAPI.subscribe(newMessageHandlerCreator(dispatch))
}

export const stopMessagesListening = (): ThunkType => async (dispatch) => {
  chatAPI.unsubscribe(newMessageHandlerCreator(dispatch))
  chatAPI.stop()
}

export const sendMessage = (message: string): ThunkType => async (dispatch) => {
  chatAPI.sendMessage(message)
}

export default chatReducer;
