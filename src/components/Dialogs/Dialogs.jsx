// import { NavLink } from 'react-router-dom';
import styles from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import React from 'react';
// import Avatar from './Avatar/Avatar';

const Dialogs = (props) => {

  // debugger

  // const avatarElements = props.state.avatar.map((avatar, i) => <Avatar key={i} avatar={avatar.avatar} id={avatar.id}/>)

  const dialogsElements = props.state.dialogsData.map((dialog, i) => <DialogItem key={i} name={dialog.name} id={dialog.id} avatar={dialog.avatar}/>)

  const messagesElements = props.state.messages.map((m, i) => <Message key={i} message={m.message} id={m.id} />)
  // const messagesElementsFriend = props.state.messagesFriend.map((m, i) => <Message key={i} message={m.message} id={m.id} />)

  let newPostEl = React.createRef()

  let addPost = () => {
    let textPost = newPostEl.current.value
    alert(textPost)
  }

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
            <textarea ref={newPostEl}></textarea>
          </div>
          <div>
            <button onClick={ addPost }>Add post</button>
          </div>
        </div>
        {/* <div className={styles.messagesFriend}>{messagesElementsFriend}</div> */}
      </div>
    </div>
  );};

export default Dialogs;
