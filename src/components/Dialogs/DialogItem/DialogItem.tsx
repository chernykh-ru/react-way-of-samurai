import { NavLink } from 'react-router-dom';
import styles from './../Dialogs.module.css';
import avataaars from './../../../assets/images/avataaars.svg';
import { DialogsType } from '../../../types/types'

// type PropsType = DialogsType

const DialogItem: React.FC<DialogsType> = ({id, name}) => {
  // debugger

  return (
    <div className={styles.dialog}>
      <img
        className={styles.avatar}
        src={avataaars}
        // src={props.avatar != null ? props.avatar : avataaars}
        alt='avatar'
      />
      <NavLink to={'/dialogs/' + id} activeClassName={styles.activeLink}>
        {name}
      </NavLink>
    </div>
  );
};

export default DialogItem;
