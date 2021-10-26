import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import state, { subscribe } from './redux/state';
import store from './redux/state';
// import { BrowserRouter as Router, Route } from 'react-router-dom';
// import { rerenderEntireTrie } from './render';
// import { addPost, updateNewPostText, addMessage, updateNewMessageText } from './redux/state';

function rerenderEntireTree(state) {
  ReactDOM.render(
    <React.StrictMode>
      <App
        state={state}
        // state={store.getState()}
        // state={state}
        dispatch={store.dispatch.bind(store)}
        // updateNewPostText={store.updateNewPostText.bind(store)}
        addMessage={store.addMessage.bind(store)}
        updateNewMessageText={store.updateNewMessageText.bind(store)}
      />
    </React.StrictMode>,
    document.getElementById('root'),
  );
}

//Передаем через callback(через внутренность функции subscribe) функцию перерисовки rerenderEntireTree в index
store.subscribe(rerenderEntireTree);

rerenderEntireTree(store.getState()); //запускает первичный рендер страницы

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
