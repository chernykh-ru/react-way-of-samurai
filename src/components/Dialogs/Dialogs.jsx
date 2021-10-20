import { NavLink } from 'react-router-dom';
import classes from './Dialogs.module.css';

const DialogItem = (props) => (
  <div className={classes.dialog}>
    <NavLink to={'/dialogs/' + props.id} activeClassName={classes.activeLink}>{props.name}</NavLink>
  </div>
)

const Message = (props) => (
  <div className={classes.message}>{props.message}</div>
)

const Dialogs = () => (
  <div className={classes.dialogs}>
    <div className={classes.dialogsItems}>
      <DialogItem name='Andrew' id='1' />
      <DialogItem name='Dmitry' id='2' />
      <DialogItem name='Sasha' id='3' />
      <DialogItem name='Sveta' id='4' />
      <DialogItem name='Valera' id='5' />
      <DialogItem name='Viktor' id='6' />
    </div>
    <div className={classes.messages}>
      <Message message='Hi' />
      <Message message='How is your it?' />
      <Message message='Yo' />
    </div>
  </div>
);

export default Dialogs;
