import classes from './Dialogs.module.css'

const Dialogs = () => (
  <div>
    <p>Dialogs</p>
    <div className={classes.wrapper}>
      <div className={classes.wrapper__item}>
        User list
        <div>
          User1
        </div>
      </div>
      <div className={classes.wrapper__item}>User dialogs</div>
    </div>
  </div>
)

export default Dialogs