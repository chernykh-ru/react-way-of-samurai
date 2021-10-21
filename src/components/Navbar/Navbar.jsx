import { NavLink } from 'react-router-dom'
import styles from './Navbar.module.css'
import DialogItem from './../Dialogs/DialogItem/DialogItem';


const Navbar = (props) => {

  // debugger

  const dialogsElements = props.state.dialogsData.map((dialog, i) => <DialogItem key={i} name={dialog.name} id={dialog.id} avatar={dialog.avatar}/>)


  return (
  <nav className={styles.nav}>
    <div className={styles.item}>
      <NavLink to='/profile' activeClassName={styles.activeLink}>Profile</NavLink>
    </div>
    <div className={styles.item}>
      <NavLink to='/dialogs' activeClassName={styles.activeLink}>Messages</NavLink>
    </div>
    <div className={styles.item}>
      <NavLink to='/news' activeClassName={styles.activeLink}>News</NavLink>
    </div>
    <div className={styles.item}>
      <NavLink to='/music' activeClassName={styles.activeLink}>Music</NavLink>
    </div>
    <div className={styles.item}>
      <NavLink to='/setings' activeClassName={styles.activeLink}>Settings</NavLink>
    </div>
    <div className={styles.item}>
      <NavLink to='/friends' activeClassName={styles.activeLink}>Friends</NavLink>
      { dialogsElements }
    </div>
  </nav>
)}

export default Navbar