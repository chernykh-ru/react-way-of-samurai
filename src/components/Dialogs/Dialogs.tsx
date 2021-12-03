import styles from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import React from 'react';
// import { Redirect } from 'react-router';
import { AddMessageFormRedux } from './AddMessageForm/AddMessageForm';
// import { reduxForm } from 'redux-form';
import { DialogsType, MessagesType } from '../../types/types'
// import InitialStateType from '../../redux/dialog-reducer'


// const AddMessageFormRedux = reduxForm({ form: 'dialogAddMessageForm' })(AddMessageForm);

type PropsType = {
  dialogs: DialogsType[],
  messages: MessagesType[],
  // isAuth: boolean
  addMessage: (message: string) => void,
}
export type DialogMessageFormType = {
  message: string
}

const Dialogs: React.FC<PropsType> = ({dialogs, messages, addMessage}) => {

  const dialogsElements = dialogs.map((dialog: DialogsType, i: number) => (
    <DialogItem key={i} name={dialog.name} id={dialog.id} />
    // <DialogItem key={i} name={dialog.name} id={dialog.id} avatar={dialog.avatar} />
  ));

  const messagesElements = messages.map((m, i) => (
    <Message key={i} message={m.message} id={m.id} />
  ));

  //в атрибуте value придут свойства как имена полей name у field
  let addNewMassage = (value: DialogMessageFormType) => {
    addMessage(value.message);
  }; //add redux-form//передаем в колбэк значение поля ввода и далее диспачим его в стейт

  // if (!isAuth) return <Redirect to={'/login'} />; //если пользователь не залогинен(пришедший в пропсах isAuth === false) то закрываем ему доступ к dialogs и перенаправляем на страницу логина

  return (
    <div className={styles.dialogs}>
      <div className={styles.dialogsItems}>{dialogsElements}</div>
      <div className={styles.messages}>
        <div className={styles.messagesUser}>{messagesElements}</div>
        <AddMessageFormRedux onSubmit={addNewMassage} />
      </div>
    </div>
  );
};

export default Dialogs;
