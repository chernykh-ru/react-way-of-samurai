

let subscribers = [] as subscriberType[]

let ws: WebSocket | null = null;

const closeHandler = () => {
  console.log('close wsChannel');
  setTimeout(createChannel, 5000);
};

let messageHandler = (e: MessageEvent) => {
  const newMessages = JSON.parse(e.data);
  subscribers.forEach(s => s(newMessages))
};

function createChannel() {
  ws?.removeEventListener('close', closeHandler);
  ws?.close();
  ws = new WebSocket('wss://social-network.samuraijs.com/handlers/ChatHandler.ashx');
  ws.addEventListener('close', closeHandler);
  ws.addEventListener('message', messageHandler);
}

export const chatAPI = {
  start() {
    createChannel()
  },
  stop() {
    subscribers = []
    ws?.removeEventListener('close', closeHandler);
    ws?.removeEventListener('message', messageHandler);
    ws?.close();

  },
  subscribe(callback: subscriberType) {
    subscribers.push(callback)
    return () => {
      subscribers = subscribers.filter(s => s !== callback)
    }//unsubscribe in subscr
  },
  unsubscribe(callback: subscriberType) {
    subscribers = subscribers.filter(s => s !== callback)
  },
  sendMessage(message: string) {
    ws?.send(message)
  }
}

type subscriberType = (messages: ChatMessageType[]) => void
export type ChatMessageType = {
  message: string;
  photo: string;
  userId: number;
  userName: string;
};