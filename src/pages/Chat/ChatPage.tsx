import { Divider } from 'antd';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ChatMessageType } from '../../api/chat-api';
import {
  sendMessage,
  startMessagesListening,
  stopMessagesListening,
} from '../../redux/chat-reducer';
import { AppStateType } from '../../redux/redux-store';
const ChatPage: React.FC = () => {
  return <Chat />;
};

const Chat: React.FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(startMessagesListening());
    return () => {
      dispatch(stopMessagesListening());
    };
  }, []);

  return (
    <div>
      <Messages />
      <AddMessageForm />
    </div>
  );
};

const Messages: React.FC = () => {
  const messages = useSelector((state: AppStateType) => state.chat.messages);

  return (
    <div style={{ height: '400px', overflowY: 'auto' }}>
      {messages.map((m: any, i) => (
        <Message key={i} message={m} />
      ))}
    </div>
  );
};

const Message: React.FC<{ message: ChatMessageType }> = ({ message }) => {
  return (
    <div>
      <img src={message.photo} style={{ width: '40px', borderRadius: '50%' }} alt='message' />
      <b>{message.userName} </b>
      <b>id: {message.userId}</b>
      <p>{message.message}</p>
      <Divider />
    </div>
  );
};

const AddMessageForm: React.FC = () => {
  const [message, setMessage] = useState('');
  const [readyStatus, setReadyStatus] = useState<'pending' | 'ready'>('pending');
  const dispatch = useDispatch();

  const sendMessageHandler = () => {
    if (!message) {
      return; //проверка что сообщение есть
    }
    dispatch(sendMessage(message));
    setMessage(''); //зануялем
  };
  return (
    <div>
      <div>
        <textarea onChange={(e) => setMessage(e.target.value)} value={message}></textarea>
      </div>
      <div>
        <button disabled={false} onClick={sendMessageHandler}>
          send
        </button>
      </div>
    </div>
  );
};

export default ChatPage;
