import classes from './Navbar.module.css'

const Navbar = () => (
  <nav className={classes.nav}>
    <div className={`${classes.item} ${classes.active}`}>
      <a href='/profile'>Profile</a>
    </div>
    <div className={classes.item}>
      <a href='/dialogs'>Messages</a>
    </div>
    <div className={classes.item}>
      <a href='/news'>News</a>
    </div>
    <div className={classes.item}>
      <a href='/music'>Music</a>
    </div>
    <div className={classes.item}>
      <a href='/setings'>Settings</a>
    </div>
  </nav>
)

export default Navbar