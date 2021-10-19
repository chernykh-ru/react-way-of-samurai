import classes from './Music.module.css'

const Music = () => (
  <div>
    <p>Music</p>
    <div className={classes.wrapper}>
      <div className={classes.wrapper__item}>
        Albums #1
      </div>
      <div className={classes.wrapper__item}>
      Albums #2
      </div>
    </div>
  </div>
)

export default Music