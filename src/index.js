import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import state, { subscribe } from './redux/state';
import store from './redux/redux-store';
// import store from './redux/store';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// import { rerenderEntireTrie } from './render';
// import { addPost, updateNewPostText, addMessage, updateNewMessageText } from './redux/state';

function rerenderEntireTree(state) {
  // debugger;
  ReactDOM.render(
    <React.StrictMode>
      <Router>
        <App
          // state={state}
          store={store}
          // state={store.getState()}
          // state={state}
          dispatch={store.dispatch.bind(store)}
          // updateNewPostText={store.updateNewPostText.bind(store)}
          // addMessage={store.addMessage.bind(store)}
          // updateNewMessageText={store.updateNewMessageText.bind(store)}
        />
      </Router>
    </React.StrictMode>,
    document.getElementById('root'),
  );
}

//отдаем стейт подписчикам из редакс стора
store.subscribe(() => {
  let state = store.getState();
  rerenderEntireTree(state);
});

//Передаем через callback(через внутренность функции subscribe) функцию перерисовки rerenderEntireTree в index
// store.subscribe(rerenderEntireTree);

rerenderEntireTree(store.getState()); //запускает первичный рендер страницы и передает свежий стейт

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
