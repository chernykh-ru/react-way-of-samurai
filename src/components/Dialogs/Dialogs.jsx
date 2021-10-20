// import { NavLink } from 'react-router-dom';
import styles from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const dialogsData = [
  {id: 1, name: 'Andrew'},
  {id: 2, name: 'Dmitry'},
  {id: 3, name: 'Sasha'},
  {id: 4, name: 'Sveta'},
  {id: 5, name: 'Valera'},
  {id: 6, name: 'Viktor'}
]

const messages = [
  {id: 1, message: 'Hi'},
  {id: 2, message: 'How is your it?'},
  {id: 3, message: 'Yo'},
  {id: 4, message: 'Yo-yo-yo'},
  {id: 5, message: 'Yo-yo'},
  {id: 6, message: 'Yo'}
]

const dialogsElements = dialogsData
  .map((dialog, i) => <DialogItem key={i} name={dialog.name} id={dialog.id} />)

const messagesElements = messages.map((m, i) => <Message key={i} message={m.message} id={m.id} />)

const Dialogs = () => (
  <div className={styles.dialogs}>
    <div className={styles.dialogsItems}>
      { dialogsElements }
    </div>
    <div className={styles.messages}>
      { messagesElements }
    </div>
  </div>
);

export default Dialogs;
