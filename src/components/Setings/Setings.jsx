import classes from './Setings.module.css'

const Setings = () => (
  <div>
    <p>Setings</p>
    <div className={classes.wrapper}>
      <div className={classes.wrapper__item}>
        User setings block #1
      </div>
      <div className={classes.wrapper__item}>
        User setings block #2
      </div>
    </div>
  </div>
)

export default Setings