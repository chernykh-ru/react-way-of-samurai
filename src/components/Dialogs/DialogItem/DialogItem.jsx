import { NavLink } from 'react-router-dom';
import styles from './../Dialogs.module.css';
import avataaars from './../../../assets/images/avataaars.png';

const DialogItem = (props) => {
  // debugger

  return (
    <div className={styles.dialog}>
      <img
        className={styles.avatar}
        src={props.avatar != null ? props.avatar : avataaars}
        alt='avatar'
      />
      <NavLink to={'/dialogs/' + props.id} activeClassName={styles.activeLink}>
        {props.name}
      </NavLink>
    </div>
  );
};

export default DialogItem;
