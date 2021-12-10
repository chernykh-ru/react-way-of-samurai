import { Divider } from 'antd';
import { useEffect, useState } from 'react';

export type ChatMessagetype = {
  message: string;
  photo: string;
  userId: number;
  userName: string;
};

const ChatPage: React.FC = () => {
  return <Chat />;
};

const Chat: React.FC = () => {
  const [wsChannel, setWsChannel] = useState<WebSocket | null>(null);

  useEffect(() => {
    let ws: WebSocket;
    const closeHandler = () => {
      console.log('close wsChannel');
      setTimeout(createChannel, 5000);
    };

    function createChannel() {
      ws?.removeEventListener('close', closeHandler);
      ws?.close();
      ws = new WebSocket('wss://social-network.samuraijs.com/handlers/ChatHandler.ashx');
      ws?.addEventListener('close', closeHandler);
      setWsChannel(ws);
    }
    createChannel(); //создаем канал

    return () => {
      ws?.removeEventListener('close', closeHandler);
      ws?.close(); //cleanup функция по зачистке канала
    };
  }, []);

  return (
    <div>
      <Messages wsChannel={wsChannel} />
      <AddMessageForm wsChannel={wsChannel} />
    </div>
  );
};

const Messages: React.FC<{ wsChannel: WebSocket | null }> = ({ wsChannel }) => {
  const [messages, setMessages] = useState<ChatMessagetype[]>([]);

  useEffect(() => {
    let messageHandler = (e: MessageEvent) => {
      const newMessages = JSON.parse(e.data);
      setMessages((prevMessages) => [...prevMessages, ...newMessages]); //иммутабельно добавляем к имеющимся сообщениям новые
      // console.log(JSON.parse(e.data));
    };
    wsChannel?.addEventListener('message', messageHandler);

    return () => {
      wsChannel?.removeEventListener('message', messageHandler);
    }; //cleanup функция по зачистке канала
  }, [wsChannel]);

  return (
    <div style={{ height: '400px', overflowY: 'auto' }}>
      {messages.map((m: any, i) => (
        <Message key={i} message={m} />
      ))}
    </div>
  );
};

const Message: React.FC<{ message: ChatMessagetype }> = ({ message }) => {
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

const AddMessageForm: React.FC<{ wsChannel: WebSocket | null }> = ({ wsChannel }) => {
  const [message, setMessage] = useState('');
  const [readyStatus, setReadyStatus] = useState<'pending' | 'ready'>('pending');

  useEffect(() => {
    let openHandler = () => {
      setReadyStatus('ready');
    };
    wsChannel?.addEventListener('open', openHandler);

    return () => {
      wsChannel?.removeEventListener('open', openHandler);
    }; //cleanup функция по зачистке канала
  }, [wsChannel]);

  const sendMessage = () => {
    if (!message) {
      return; //проверка что сообщение есть
    }
    wsChannel?.send(message); //отправляем сообщение из локального стейта(from textarea)
    setMessage(''); //зануялем
  };
  return (
    <div>
      <div>
        <textarea onChange={(e) => setMessage(e.target.value)} value={message}></textarea>
      </div>
      <div>
        <button disabled={wsChannel === null || readyStatus !== 'ready'} onClick={sendMessage}>
          send
        </button>
      </div>
    </div>
  );
};

export default ChatPage;
