import { NavLink } from 'react-router-dom';
import styles from './../Dialogs.module.css';

const DialogItem = (props) => {

  // debugger

  return (
  <div className={styles.dialog}>
    <img className={styles.avatar} src={props.avatar} alt='avatar' />
    <NavLink to={'/dialogs/' + props.id} activeClassName={styles.activeLink}>{props.name}</NavLink>
  </div>
)}


export default DialogItem;
