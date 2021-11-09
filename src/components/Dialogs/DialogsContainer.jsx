// import { NavLink } from 'react-router-dom';
// import styles from './Dialogs.module.css';
// import DialogItem from './DialogItem/DialogItem';
// import Message from './Message/Message';
// import React from 'react';
import { connect } from 'react-redux';
import {
  addMessageActionCreator,
  updateNewMessageTextActionCreator,
} from '../../redux/dialog-reducer';
// import StoreContext from '../../StoreContext';
import Dialogs from './Dialogs';

//данные стейта(замапить стейт на пропсы - превратить нужную часть стейта в пропсы)
//connect в mstp засунет стейт
let mapStateToProps = (state) => {
  return {
    dialogs: state.dialogsPage.dialogs,
    messages: state.dialogsPage.messages,
    newMessageText: state.dialogsPage.newMessageText,
    isAuth: state.auth.isAuth, //вытаскиваем из стейта инфу залогинен или нет
  };
};

//колбэки
//connect в mdtp засунет store.dispatch.bind(store)
let mapDispatchToProps = (dispatch) => {
  return {
    addMessage: () => {
      dispatch(addMessageActionCreator());
    }, //мы диспатчем не экшнкриэйтор, ЭК мы запускаем, он возвращает нам экшн(это объект у которого есть минимум тип) и мы диспатчем это вернувшийся экшн
    messageChange: (text) => {
      dispatch(updateNewMessageTextActionCreator(text));
    },
  };
};

//connect from react-redux
//двойной вызов ()() -  вызываем функцию connect, она возвращает другую функцию и мы вызываем другую функцию, которую нам вернул предыдущий вызов
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
