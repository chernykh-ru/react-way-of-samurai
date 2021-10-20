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

// const dialogsElements = dialogsData.map(dialog => {
//   return (<DialogItem name={dialog.name} id={dialog.id} />)
// })

// [
//   <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />,
//   <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />,
//   <DialogItem name={dialogsData[2].name} id={dialogsData[2].id} />
// ]

const messagesElements = messages.map((m, i) => <Message key={i} message={m.message} id={m.id} />)

const Dialogs = () => (
  <div className={classes.dialogs}>
    <div className={classes.dialogsItems}>
      { dialogsElements }
      {/* <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
      <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} /> */}
    </div>
    <div className={classes.messages}>
      { messagesElements }
      {/* <Message message={messagesData[0].message} id={messagesData[0].id} />
      <Message message={messagesData[1].message} id={messagesData[1].id} /> */}

    </div>
  </div>
);

export default Dialogs;
