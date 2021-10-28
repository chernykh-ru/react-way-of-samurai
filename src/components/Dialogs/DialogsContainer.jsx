// import { NavLink } from 'react-router-dom';
// import styles from './Dialogs.module.css';
// import DialogItem from './DialogItem/DialogItem';
// import Message from './Message/Message';
import React from 'react';
import {
  addMessageActionCreator,
  updateNewMessageTextActionCreator,
} from '../../redux/dialog-reducer';
import Dialogs from './Dialogs';

// import Avatar from './Avatar/Avatar';

const DialogsContainer = (props) => {
  // debugger;
  let state = props.store.getState(); //получаем свежий стейт в контейнерной компоненте

  // const avatarElements = props.state.avatar.map((avatar, i) => <Avatar key={i} avatar={avatar.avatar} id={avatar.id}/>)

  // const dialogsElements = props.dialogsPage.dialogs.map((dialog, i) => (
  //   <DialogItem key={i} name={dialog.name} id={dialog.id} avatar={dialog.avatar} />
  // ));

  // const messagesElements = props.dialogsPage.messages.map((m, i) => (
  //   <Message key={i} message={m.message} id={m.id} />
  // ));
  // const messagesElementsFriend = props.state.messagesFriend.map((m, i) => <Message key={i} message={m.message} id={m.id} />)

  // let newMessageElement = React.createRef();

  let addMessage = () => {
    props.store.dispatch(addMessageActionCreator()); //исправить путь пропсов
    // props.addMessage();
    // props.updateNewMessageText('');
    // let text = newMessageElement.current.value;
    // alert(text);
  };

  let onMessageChange = (text) => {
    let action = updateNewMessageTextActionCreator(text);
    props.store.dispatch(action); //обновляем поле ввода из стейта по пропсам//исправить путь пропсов
    // let text = e.target.value; //значение поста берем в textarea value
    // let text = newMessageElement.current.value; //значение поста берем в textarea value from ref
  };

  // let onAddMessageClick = () => {

  // }

  return (
    <Dialogs
      addMessage={addMessage}
      messageChange={onMessageChange}
      dialogs={state.dialogsPage.dialogs}
      messages={state.dialogsPage.messages}
    />
  );
};

export default DialogsContainer;
