import { ChatMessageAPIType, chatAPI, StatusType } from './../api/chat-api';
import { BasicThunkType, InferActionsTypes } from './redux-store';
import { Dispatch } from 'redux';
import {v4 as uuidv4 } from 'uuid'

type ChatMessageType = ChatMessageAPIType & {id: string}

const initialState = {
  messages: [] as ChatMessageType[],
  status: 'pending' as StatusType
};

const chatReducer = (state: InitialStateType = initialState, action: ActionsTypes): InitialStateType => {
  switch (action.type) {
    case 'RWOS/CHAT/MESSAGES_RECEIVED': {
      return {
        ...state,
        messages: [...state.messages, ...action.payload.messages.map(m => ({...m, id: uuidv4()}))].filter((m, index, array) => index >= (array.length - 100)),
      };
    }
    case 'RWOS/CHAT/STATUS_CHANGED': {
      return {
        ...state,
        status: action.payload.status,
      };
    }
    default:
      return state;
  }
};

export const actions = {
  messagesReseived: (messages: ChatMessageAPIType[]) => ({
    type: 'RWOS/CHAT/MESSAGES_RECEIVED',
    payload: { messages },
  } as const),
  statusChanged: (status: StatusType) => ({
    type: 'RWOS/CHAT/STATUS_CHANGED',
    payload: { status },
  } as const),
}

export type InitialStateType = typeof initialState
type ActionsTypes = InferActionsTypes<typeof actions>
type ThunkType = BasicThunkType<ActionsTypes>

//TC

let _newMessageHandler: ((messages: ChatMessageAPIType[]) => void) | null = null
const newMessageHandlerCreator = (dispatch: Dispatch) => {
  if(_newMessageHandler === null) {
    _newMessageHandler = (messages) => {
      dispatch(actions.messagesReseived(messages))
      }//c HOCом передаем диспатч внутренней функции через замыкание
    };
  return _newMessageHandler
}

let _statusChangedHandler: ((status: StatusType) => void) | null = null
const statusChangedHandlerCreator = (dispatch: Dispatch) => {
  if(_statusChangedHandler === null) {
    _statusChangedHandler = (status) => {
      dispatch(actions.statusChanged(status))
      }//c HOCом передаем диспатч внутренней функции через замыкание
    };
  return _statusChangedHandler
}

export const startMessagesListening = (): ThunkType => async (dispatch) => {
  chatAPI.start()
  chatAPI.subscribe('messages-received', newMessageHandlerCreator(dispatch))
  chatAPI.subscribe('status-changed', statusChangedHandlerCreator(dispatch))
}

export const stopMessagesListening = (): ThunkType => async (dispatch) => {
  chatAPI.unsubscribe('messages-received', newMessageHandlerCreator(dispatch))
  chatAPI.unsubscribe('status-changed', statusChangedHandlerCreator(dispatch))
  chatAPI.stop()
}

export const sendMessage = (message: string): ThunkType => async (dispatch) => {
  chatAPI.sendMessage(message)
}

export default chatReducer;
