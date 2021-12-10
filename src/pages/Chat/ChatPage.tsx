import { Divider } from 'antd';
import { useEffect, useState } from 'react';

const wsChannel = new WebSocket('wss://social-network.samuraijs.com/handlers/ChatHandler.ashx'); //создаем соединение с вебсокетом

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
  return (
    <div>
      <Messages />
      <AddMessageForm />
    </div>
  );
};

const Messages: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessagetype[]>([]);

  useEffect(() => {
    wsChannel.addEventListener('message', (e) => {
      const newMessages = JSON.parse(e.data);
      setMessages((prevMessages) => [...prevMessages, ...newMessages]); //иммутабельно добавляем к имеющимся сообщениям новые
      // console.log(JSON.parse(e.data));
    });
  }, []);

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

const AddMessageForm: React.FC = () => {
  const [message, setMessage] = useState('');
  const sendMessage = () => {
    if (!message) {
      return; //проверка что сообщение есть
    }
    wsChannel.send(message); //отправляем сообщение из локального стейта(from textarea)
    setMessage(''); //зануялем
  };
  return (
    <div>
      <div>
        <textarea onChange={(e) => setMessage(e.target.value)} value={message}></textarea>
      </div>
      <div>
        <button onClick={sendMessage}>send</button>
      </div>
    </div>
  );
};

export default ChatPage;
