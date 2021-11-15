// import { NavLink } from 'react-router-dom';
import styles from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import React from 'react';
import { Redirect } from 'react-router';
import { Field, reduxForm } from 'redux-form';
import { Textarea } from '../common/FormsControls/FormsControls';
import { required, maxLengthCreator } from '../../utils/validators/validators';

const maxLength50 = maxLengthCreator(50);

const AddMessageForm = (props) => {
  const { handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Field
          component={Textarea}
          name={'newMessageText'}
          placeholder={'Enter your message'}
          validate={[required, maxLength50]}
        />
        {/* <Field component={'textarea'} name={'newMessageText'} value={props.newMessageText} /> */}
      </div>
      <div>
        <button>Add message</button>
      </div>
    </form>
  );
};

const AddMessageFormRedux = reduxForm({ form: 'dialogAddMessageForm' })(AddMessageForm);

const Dialogs = (props) => {
  // debugger;

  const dialogsElements = props.dialogs.map((dialog, i) => (
    <DialogItem key={i} name={dialog.name} id={dialog.id} avatar={dialog.avatar} />
  ));

  const messagesElements = props.messages.map((m, i) => (
    <Message key={i} message={m.message} id={m.id} />
  ));

  // let onAddMessage = () => {
  //   props.addMessage(); //callback from store
  // };//add redux-form

  // let onMessageChange = (e) => {
  //   let text = e.target.value; //значение поста берем в textarea value
  //   props.messageChange(text); //callback from store
  // };//add redux-form

  //в атрибуте value придут свойства как имена полей name у field
  let addNewMassage = (value) => {
    // console.log(value.newMessageText);
    props.addMessage(value.newMessageText);
  }; //add redux-form//передаем в колбэк значение поля ввода и далее диспачим его в стейт

  if (!props.isAuth) return <Redirect to={'/login'} />; //если пользователь не залогинен(пришедший в пропсах isAuth === false) то закрываем ему доступ к dialogs и перенаправляем на страницу логина

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
