import { Divider } from 'antd';
import React from 'react';
import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ChatMessageAPIType } from '../../api/chat-api';
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
  const status = useSelector((state: AppStateType) => state.chat.status);

  useEffect(() => {
    dispatch(startMessagesListening());
    return () => {
      dispatch(stopMessagesListening());
    };
  }, []);

  return (
    <div>
      {status === 'error' && <div>Some error occured. Please refresh page</div>}
      <Messages />
      <AddMessageForm />
    </div>
  );
};

const Messages: React.FC = () => {
  const messagesAnchorRef = useRef<HTMLDivElement>(null);
  const messages = useSelector((state: AppStateType) => state.chat.messages);
  const [isAutoScroll, setIsAutoScroll] = useState(true);
  const scrollHandler = (e: React.UIEvent<HTMLDivElement, UIEvent>) => {
    let element = e.currentTarget;
    if (Math.abs(element.scrollHeight - element.scrollTop - element.clientHeight) < 300) {
      !isAutoScroll && setIsAutoScroll(true);
    } else {
      isAutoScroll && setIsAutoScroll(false);
    }
  };
  // useLayoutEffect(() => {
  //   messagesAnchorRef.current?.scrollIntoView({ behavior: 'smooth', block: 'end' });
  // }, [messages]);
  useEffect(() => {
    if (isAutoScroll) {
      messagesAnchorRef.current?.scrollIntoView({ behavior: 'smooth', block: 'end' });
    }
  }, [messages]);

  return (
    <div style={{ height: '400px', overflowY: 'auto' }} onScroll={scrollHandler}>
      {messages.map((m: any, i) => (
        <Message key={m.id} message={m} />
      ))}
      <div ref={messagesAnchorRef}></div>
    </div>
  );
};

const Message: React.FC<{ message: ChatMessageAPIType }> = React.memo(({ message }) => {
  return (
    <div>
      <img src={message.photo} style={{ width: '40px', borderRadius: '50%' }} alt='message' />
      <b>{message.userName} </b>
      <b>id: {message.userId}</b>
      <p>{message.message}</p>
      <Divider />
    </div>
  );
});

const AddMessageForm: React.FC = () => {
  const [message, setMessage] = useState('');
  const status = useSelector((state: AppStateType) => state.chat.status);
  const dispatch = useDispatch();

  const sendMessageHandler = () => {
    if (!message) {
      return;
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
        <button disabled={status === 'pending'} onClick={sendMessageHandler}>
          send
        </button>
      </div>
    </div>
  );
};

export default ChatPage;
