import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import state from './redux/state';
import { addPost, updateNewPostText, addMessage, updateNewMessageText } from './redux/state';

export let rerenderEntireTrie = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <App
        state={state}
        addPost={addPost}
        updateNewPostText={updateNewPostText}
        addMessage={addMessage}
        updateNewMessageText={updateNewMessageText}
      />
    </React.StrictMode>,
    document.getElementById('root'),
  );
};
