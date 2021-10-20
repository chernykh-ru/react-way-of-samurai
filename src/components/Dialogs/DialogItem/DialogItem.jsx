import { NavLink } from 'react-router-dom';
import styles from './../Dialogs.module.css';

const DialogItem = (props) => (
  <div className={styles.dialog}>
    <NavLink to={'/dialogs/' + props.id} activeClassName={styles.activeLink}>{props.name}</NavLink>
  </div>
)


export default DialogItem;
