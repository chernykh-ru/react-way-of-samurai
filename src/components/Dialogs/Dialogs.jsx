// import { NavLink } from 'react-router-dom';
import styles from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import React from 'react';
import {
  addMessageActionCreator,
  updateNewMessageTextActionCreator,
} from './../../redux/dialog-reducer';

// import Avatar from './Avatar/Avatar';

const Dialogs = (props) => {
  // debugger

  // const avatarElements = props.state.avatar.map((avatar, i) => <Avatar key={i} avatar={avatar.avatar} id={avatar.id}/>)

  const dialogsElements = props.dialogsPage.dialogs.map((dialog, i) => (
    <DialogItem key={i} name={dialog.name} id={dialog.id} avatar={dialog.avatar} />
  ));

  const messagesElements = props.dialogsPage.messages.map((m, i) => (
    <Message key={i} message={m.message} id={m.id} />
  ));
  // const messagesElementsFriend = props.state.messagesFriend.map((m, i) => <Message key={i} message={m.message} id={m.id} />)

  // let newMessageElement = React.createRef();

  let addMessage = () => {
    props.dispatch(addMessageActionCreator());
    // props.addMessage();
    // props.updateNewMessageText('');
    // let text = newMessageElement.current.value;
    // alert(text);
  };

  let onMessageChange = (e) => {
    let text = e.target.value; //значение поста берем в textarea value
    // let text = newMessageElement.current.value; //значение поста берем в textarea value from ref
    let action = updateNewMessageTextActionCreator(text);
    props.dispatch(action); //обновляем поле ввода из стейта по пропсам
  };

  // let onAddMessageClick = () => {

  // }

  return (
    <div className={styles.dialogs}>
      <div className={styles.dialogsItems}>
        {/* { avatarElements } */}
        {dialogsElements}
      </div>
      <div className={styles.messages}>
        <div className={styles.messagesUser}>{messagesElements}</div>
        <div>
          <div>
            <textarea
              onChange={onMessageChange}
              // ref={newMessageElement}//уходим от исользования ref
              value={props.newMessageText}
              placeholder='Enter your message'
            />
          </div>
          <div>
            <button onClick={addMessage}>Add message</button>
          </div>
        </div>
        {/* <div className={styles.messagesFriend}>{messagesElementsFriend}</div> */}
      </div>
    </div>
  );
};

export default Dialogs;
