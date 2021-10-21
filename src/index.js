import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const posts = [
  {id: 1, message: 'Hi, how are you?', likeCounter: 15},
  {id: 2, message: 'My first react post', likeCounter: 25},
  {id: 3, message: 'Yo', likeCounter: 5},
]

const dialogsData = [
  {id: 1, name: 'Andrew'},
  {id: 2, name: 'Dmitry'},
  {id: 3, name: 'Sasha'},
  {id: 4, name: 'Sveta'},
  {id: 5, name: 'Valera'},
  {id: 6, name: 'Viktor'},
  {id: 7, name: 'Pasha'},
]

const messages = [
  {id: 1, message: 'Hi'},
  {id: 2, message: 'How is your it?'},
  {id: 3, message: 'Yo'},
  {id: 4, message: 'Yo-yo-yo'},
  {id: 5, message: 'Yo-yo'},
  {id: 6, message: 'Yo'}
]

ReactDOM.render(
  <React.StrictMode>
    <App posts={posts} dialogsData={dialogsData} messages={messages} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
