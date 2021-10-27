// import { NavLink } from 'react-router-dom';
import styles from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import React from 'react';
import { addMessageActionCreator, updateNewMessageTextActionCreator } from './../../redux/state';

// import Avatar from './Avatar/Avatar';

const Dialogs = (props) => {
  // debugger

  // const avatarElements = props.state.avatar.map((avatar, i) => <Avatar key={i} avatar={avatar.avatar} id={avatar.id}/>)

  const dialogsElements = props.dialogsPage.dialogsData.map((dialog, i) => (
    <DialogItem key={i} name={dialog.name} id={dialog.id} avatar={dialog.avatar} />
  ));

  const messagesElements = props.dialogsPage.messages.map((m, i) => (
    <Message key={i} message={m.message} id={m.id} />
  ));
  // const messagesElementsFriend = props.state.messagesFriend.map((m, i) => <Message key={i} message={m.message} id={m.id} />)

  let newMessageElement = React.createRef();

  let addMessage = () => {
    props.dispatch(addMessageActionCreator());
    // props.addMessage();
    // props.updateNewMessageText('');
    // let text = newMessageElement.current.value;
    // alert(text);
  };

  let onMessageChange = () => {
    let text = newMessageElement.current.value; //значение поста берем в textarea value from ref
    let action = updateNewMessageTextActionCreator(text);
    props.dispatch(action); //обновляем поле ввода из стейта по пропсам
  };

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
              ref={newMessageElement}
              value={props.newMessageText}
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
