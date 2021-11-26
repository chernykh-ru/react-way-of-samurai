import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './redux/redux-store';
import { HashRouter as Router } from 'react-router-dom'; //HashRouter применен для деплоя на gh-pages
// import { BrowserRouter as Router, Route } from 'react-router-dom';//заменен на HashRouter
import { Provider } from 'react-redux';

ReactDOM.render(
  // <React.StrictMode>
  <Router>
    {/* <Router basename={process.env.PUBLIC_URL}> */}
    <Provider store={store}>
      <App />
    </Provider>
  </Router>,
  // </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
